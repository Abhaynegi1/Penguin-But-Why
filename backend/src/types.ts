/**
 * Represents a single telemetry record from the NOAA dataset
 */
export interface PenguinTelemetry {
    BirdId: string;
    Sex: string;
    Age: string;
    "Breed Stage": string;
    DateGMT: string;
    TimeGMT: string;
    Latitude: string;
    Longitude: string;
    ArgosQuality: string;
}

/**
 * Summary statistics for a specific penguin specimen
 */
export interface BirdStats {
    BirdId: string;
    records: number;
    sex: string;
    age: string;
    stage: string;
}

/**
 * Global statistics response
 */
export interface GlobalStats {
    totalRecords: number;
    birdCount: number;
    birds: BirdStats[];
}
