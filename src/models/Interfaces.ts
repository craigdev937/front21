export interface IDark {
    darkmode: boolean
};

export interface ICountry {
    "name": {
        "common": string,
        "official": string,
        "nativeName": {
            "spa": {
                "official": string,
                "common": string
            },
        },
    },
    "tld": [string],
    "cca2": string,
    "ccn3": string,
    "cca3": string,
    "cioc": string,
    "independent": boolean,
    "status": string,
    "unMember": boolean,
    "currencies": {
        "GTQ": {
            "name": string,
            "symbol": string
        }
    },
    "idd": {
        "root": string,
        "suffixes": [
            string
        ]
    },
    "capital": [
        string
    ],
    "altSpellings": [
        string
    ],
    "region": string,
    "subregion": string,
    "languages": {
        "spa": string
    },
    "latlng": [
        number,
        number
    ],
    "landlocked": false,
    "borders": [
        string,
        string,
        string,
        string
    ],
    "area": number,
    "demonyms": {
        "eng": {
            "f": string,
            "m": string
        },
        "fra": {
            "f": string,
            "m": string
        }
    },
    "flag": string,
    "maps": {
        "googleMaps": string,
        "openStreetMaps": string
    },
    "population": number,
    "gini": {
        "2014": number
    },
    "fifa": string,
    "car": {
        "signs": [
            string
        ],
        "side": string
    },
    "timezones": [
        string
    ],
    "continents": [
        string
    ],
    "flags": {
        "png": string,
        "svg": string,
        "alt": string
    },
    "coatOfArms": {
        "png": string,
        "svg": string
    },
    "startOfWeek": string,
    "capitalInfo": {
        "latlng": [
            number,
            number
        ]
    }
};

export interface ICountryState {
    countries: ICountry[],
    loading: boolean,
    error: Error | null
};




