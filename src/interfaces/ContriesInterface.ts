export interface ContriesResponse {
    name: string;
    capital?: string;
    region: Region;
    population: number;
    flags: Flags;
    flag: string;
}

export interface ResultCountryByName {
    name: string;
    capital: string;
    borders: string[];
    nativeName: string;
    topLevelDomain: string[];
    languages: Language[];
    subregion: string;
    region: string;
    population: number;
    flags: Flags;
    currencies: Currency[];
    flag: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}


export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    AntarcticOcean = "Antarctic Ocean",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

export interface AllCountriesNamesAndAlphaCode {
    name: string;
    alpha3Code: string;
}