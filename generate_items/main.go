package main

import (
	"bufio"
	"encoding/csv"
	"flag"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"

	"github.com/wowsims/wotlk/sim/core/proto"
)

func main() {
	outDir := flag.String("outDir", "", "Path to output directory for writing generated .go files.")
	db := flag.String("db", "wotlkdb", "which database to use")
	flag.Parse()

	if *outDir == "" {
		panic("outDir flag is required!")
	}

	tooltipsDB := getWowheadTooltipsDB()
	var gemsData []GemData
	var itemsData []ItemData
	if *db == "wowhead" {
		gemDeclarations := getGemDeclarations()
		gemsData = make([]GemData, len(gemDeclarations))
		for idx, gemDeclaration := range gemDeclarations {
			gemData := GemData{
				Declaration: gemDeclaration,
				Response:    getWowheadItemResponse(gemDeclaration.ID, tooltipsDB),
			}
			if gemData.Response.GetName() == "" {
				continue
			}
			//log.Printf("\n\n%+v\n", gemData.Response)
			gemsData[idx] = gemData
		}

		itemDeclarations := getItemDeclarations()
		qualityModifiers := getItemQualityModifiers()
		itemsData = make([]ItemData, len(itemDeclarations))
		for idx, itemDeclaration := range itemDeclarations {
			itemData := ItemData{
				Declaration:     itemDeclaration,
				Response:        getWowheadItemResponse(itemDeclaration.ID, tooltipsDB),
				QualityModifier: qualityModifiers[itemDeclaration.ID],
			}
			if itemData.Response.GetName() == "" {
				continue
			}
			//fmt.Printf("\n\n%+v\n", itemData.Response)
			itemsData[idx] = itemData
		}
	} else if *db == "wotlkdb" {
		itemsData = make([]ItemData, 0, len(tooltipsDB))
		gemsData = make([]GemData, 0, len(tooltipsDB))
		for k := range tooltipsDB {
			resp := getWotlkItemResponse(k, tooltipsDB)
			if resp.Name == "" || strings.Contains(resp.Name, "zzOLD") {
				continue
			}
			if resp.IsPattern() {
				continue
			}
			// No socket color means that this isn't a gem
			if resp.GetSocketColor() == proto.GemColor_GemColorUnknown {
				itemsData = append(itemsData, ItemData{Response: resp, Declaration: ItemDeclaration{ID: k}})
			} else {
				gemsData = append(gemsData, GemData{Response: resp, Declaration: GemDeclaration{ID: k}})
			}
		}
	} else {
		panic("invalid item database source")
	}

	sort.SliceStable(gemsData, func(i, j int) bool {
		if gemsData[i].Response == nil {
			return false
		} else if gemsData[j].Response == nil {
			return true
		}
		return gemsData[i].Response.GetName() < gemsData[j].Response.GetName()
	})
	writeGemFile(*outDir, gemsData)

	sort.SliceStable(itemsData, func(i, j int) bool {
		if itemsData[i].Response == nil {
			return false
		} else if itemsData[j].Response == nil {
			return true
		}
		return itemsData[i].Response.GetName() < itemsData[j].Response.GetName()
	})
	writeItemFile(*outDir, itemsData)
}

func getGemDeclarations() []GemDeclaration {
	gemsData := readCsvFile("./assets/item_data/all_gem_ids.csv")

	// Ignore first line
	gemsData = gemsData[1:]

	gemDeclarations := make([]GemDeclaration, len(gemsData))
	for i, gemsDataRow := range gemsData {
		gemID, err := strconv.Atoi(gemsDataRow[0])
		if err != nil {
			log.Fatal("Invalid gem ID: " + gemsDataRow[0])
		}
		declaration := GemDeclaration{
			ID: gemID,
		}

		for _, override := range GemDeclarationOverrides {
			if override.ID == gemID {
				declaration = override
				break
			}
		}

		gemDeclarations[i] = declaration
	}

	// Add any declarations that were missing from the csv file.
	for _, overrideGemDeclaration := range GemDeclarationOverrides {
		found := false
		for _, gemDecl := range gemDeclarations {
			if gemDecl.ID == overrideGemDeclaration.ID {
				found = true
				break
			}
		}
		if !found {
			gemDeclarations = append(gemDeclarations, overrideGemDeclaration)
		}
	}

	return gemDeclarations
}

func getItemDeclarations() []ItemDeclaration {
	//itemsData := readCsvFile("./assets/item_data/all_equippable_item_ids.csv")
	itemsData := readCsvFile("./assets/item_data/all_item_ids.csv")

	// Ignore first line
	itemsData = itemsData[1:]

	itemDeclarations := make([]ItemDeclaration, len(itemsData))
	for i, itemsDataRow := range itemsData {
		itemID, err := strconv.Atoi(itemsDataRow[0])
		if err != nil {
			log.Fatal("Invalid item ID: " + itemsDataRow[0])
		}
		declaration := ItemDeclaration{
			ID: itemID,
		}

		for _, override := range ItemDeclarationOverrides {
			if override.ID == itemID {
				declaration = override
				break
			}
		}

		itemDeclarations[i] = declaration
	}

	// Add any declarations that were missing from the csv file.
	for _, overrideItemDeclaration := range ItemDeclarationOverrides {
		found := false
		for _, itemDecl := range itemDeclarations {
			if itemDecl.ID == overrideItemDeclaration.ID {
				found = true
				break
			}
		}
		if !found {
			itemDeclarations = append(itemDeclarations, overrideItemDeclaration)
		}
	}

	return itemDeclarations
}

// Returns the prefetched list of all wowhead tooltips.
// Maps item IDs to tooltip strings.
func getWowheadTooltipsDB() map[int]string {
	file, err := os.Open("./assets/item_data/all_item_tooltips.csv")
	if err != nil {
		log.Fatalf("Failed to open all_item_tooltips.csv: %s", err)
	}
	defer file.Close()

	db := make(map[int]string)
	scanner := bufio.NewScanner(file)
	i := 0
	for scanner.Scan() {
		i++
		if i == 1 {
			// Ignore first line
			continue
		}

		line := scanner.Text()

		itemIDStr := line[:strings.Index(line, ",")]
		itemID, err := strconv.Atoi(itemIDStr)
		if err != nil {
			log.Fatal("Invalid item ID: " + itemIDStr)
		}

		tooltip := line[strings.Index(line, "{"):]
		db[itemID] = tooltip
	}

	fmt.Printf("\n--\nTOOLTIPS LOADED: %d\n--\n", len(db))
	return db
}

func getItemQualityModifiers() map[int]float64 {
	file, err := os.Open("./assets/item_data/quality_modifiers.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	qualityMods := make(map[int]float64)
	scanner := bufio.NewScanner(file)
	i := 0
	for scanner.Scan() {
		i++
		if i == 1 {
			// Ignore first line
			continue
		}

		line := scanner.Text()

		itemIDStr := line[:strings.Index(line, ",")]
		itemID, err := strconv.Atoi(itemIDStr)
		if err != nil {
			log.Fatal("Invalid item ID: " + itemIDStr)
		}

		qualityModStr := line[strings.LastIndex(line, ",")+1:]
		qualityMod, err := strconv.ParseFloat(qualityModStr, 64)
		if err != nil {
			log.Fatal("Invalid quality mod: ", qualityModStr)
		}

		qualityMods[itemID] = qualityMod
	}

	return qualityMods
}

func readCsvFile(filePath string) [][]string {
	f, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file "+filePath, err)
	}
	defer f.Close()

	csvReader := csv.NewReader(f)
	records, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse file as CSV for "+filePath, err)
	}

	return records
}
