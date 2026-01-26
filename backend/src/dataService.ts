import fs from 'fs';
import path from 'path';
import { PenguinTelemetry, GlobalStats, BirdStats } from './types';

/**
 * Service to handle loading, parsing and querying penguin telemetry data
 */
export class PenguinDataService {
    private data: PenguinTelemetry[] = [];
    private csvPath: string;

    constructor() {
        this.csvPath = path.join(__dirname, '../data/penguins.csv');
    }

    /**
     * Loads and parses the CSV data from the NOAA dataset
     */
    public loadData(): void {
        try {
            if (!fs.existsSync(this.csvPath)) {
                console.error(`[DataService] CSV file not found at ${this.csvPath}`);
                return;
            }

            const csvContent = fs.readFileSync(this.csvPath, 'utf-8');
            const lines = csvContent.split('\n');
            const headers = lines[0].split(',').map(h => h.trim());

            this.data = lines.slice(1)
                .filter(line => line.trim() !== '')
                .map(line => {
                    const values = line.split(',');
                    if (values.length !== headers.length) return null;

                    const entry: any = {};
                    headers.forEach((header, i) => {
                        entry[header] = values[i].trim();
                    });
                    return entry as PenguinTelemetry;
                })
                .filter((p): p is PenguinTelemetry => p !== null);

            console.log(`[DataService] Successfully loaded ${this.data.length} telemetry records`);
        } catch (err: any) {
            console.error(`[DataService] Error loading data: ${err.message}`);
        }
    }

    /**
     * Returns all telemetry records
     */
    public getAllTelemetry(): PenguinTelemetry[] {
        return this.data;
    }

    /**
     * Returns telemetry for a specific bird specimen
     */
    public getTelemetryByBird(birdId: string): PenguinTelemetry[] {
        return this.data.filter(p => p.BirdId === birdId);
    }

    /**
     * Calculates and returns global and per-bird statistics
     */
    public getStats(): GlobalStats {
        const uniqueBirdIds = Array.from(new Set(this.data.map(p => p.BirdId)));

        const birdStats: BirdStats[] = uniqueBirdIds.map(id => {
            const records = this.getTelemetryByBird(id);
            return {
                BirdId: id,
                records: records.length,
                sex: records[0].Sex,
                age: records[0].Age,
                stage: records[0]["Breed Stage"] // Use the correct CSV header name
            };
        });

        return {
            totalRecords: this.data.length,
            birdCount: uniqueBirdIds.length,
            birds: birdStats
        };
    }
}

// Export a singleton instance
export const dataService = new PenguinDataService();
