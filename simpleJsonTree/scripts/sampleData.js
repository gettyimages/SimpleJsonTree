var randomData = {
  foo: "lorem",
  bar: "ipsum",
  baz: "dolor",
  foobar: {
    iam: "a nested object property"
  },
  barbaz: [
      {
        iam: "an object property nested in an array",
        andiam: [
          {
            yepiam: "a property nested deep in arrays and objects",
            andisuream: {
              anotherproperty: "nested even further down the hierarchy"
            }
          }
        ]
      },
      {
        iam: "another object property nested in an array"
      }
    ]
};

var countriesResponse = {
  "ResponseHeader": {
    "Status": "success",
    "StatusList": [],
    "CoordinationId": ""
  },
  "GetCountriesResult": {
    "Countries": [
      {
        "CountryChar2ISO": "AF",
        "CountryChar3ISO": "AFG",
        "CountryName": "Afghanistan"
      },
      {
        "CountryChar2ISO": "AL",
        "CountryChar3ISO": "ALB",
        "CountryName": "Albania"
      },
      {
        "CountryChar2ISO": "DZ",
        "CountryChar3ISO": "DZA",
        "CountryName": "Algeria"
      },
      {
        "CountryChar2ISO": "AS",
        "CountryChar3ISO": "ASM",
        "CountryName": "American Samoa"
      },
      {
        "CountryChar2ISO": "AD",
        "CountryChar3ISO": "AND",
        "CountryName": "Andorra"
      },
      {
        "CountryChar2ISO": "AO",
        "CountryChar3ISO": "AGO",
        "CountryName": "Angola"
      },
      {
        "CountryChar2ISO": "AI",
        "CountryChar3ISO": "AIA",
        "CountryName": "Anguilla"
      },
      {
        "CountryChar2ISO": "AQ",
        "CountryChar3ISO": "ATA",
        "CountryName": "Antarctica"
      },
      {
        "CountryChar2ISO": "AG",
        "CountryChar3ISO": "ATG",
        "CountryName": "Antigua and Barbuda"
      },
      {
        "CountryChar2ISO": "AR",
        "CountryChar3ISO": "ARG",
        "CountryName": "Argentina"
      },
      {
        "CountryChar2ISO": "AM",
        "CountryChar3ISO": "ARM",
        "CountryName": "Armenia"
      },
      {
        "CountryChar2ISO": "AW",
        "CountryChar3ISO": "ABW",
        "CountryName": "Aruba"
      },
      {
        "CountryChar2ISO": "AU",
        "CountryChar3ISO": "AUS",
        "CountryName": "Australia"
      },
      {
        "CountryChar2ISO": "AT",
        "CountryChar3ISO": "AUT",
        "CountryName": "Austria"
      },
      {
        "CountryChar2ISO": "AZ",
        "CountryChar3ISO": "AZE",
        "CountryName": "Azerbaijan"
      },
      {
        "CountryChar2ISO": "BS",
        "CountryChar3ISO": "BHS",
        "CountryName": "Bahamas"
      },
      {
        "CountryChar2ISO": "BH",
        "CountryChar3ISO": "BHR",
        "CountryName": "Bahrain"
      },
      {
        "CountryChar2ISO": "BD",
        "CountryChar3ISO": "BGD",
        "CountryName": "Bangladesh"
      },
      {
        "CountryChar2ISO": "BB",
        "CountryChar3ISO": "BRB",
        "CountryName": "Barbados"
      },
      {
        "CountryChar2ISO": "BE",
        "CountryChar3ISO": "BEL",
        "CountryName": "Belgium"
      },
      {
        "CountryChar2ISO": "BZ",
        "CountryChar3ISO": "BLZ",
        "CountryName": "Belize"
      },
      {
        "CountryChar2ISO": "BJ",
        "CountryChar3ISO": "BEN",
        "CountryName": "Benin"
      },
      {
        "CountryChar2ISO": "BM",
        "CountryChar3ISO": "BMU",
        "CountryName": "Bermuda"
      },
      {
        "CountryChar2ISO": "BT",
        "CountryChar3ISO": "BTN",
        "CountryName": "Bhutan"
      },
      {
        "CountryChar2ISO": "BO",
        "CountryChar3ISO": "BOL",
        "CountryName": "Bolivia"
      },
      {
        "CountryChar2ISO": "BA",
        "CountryChar3ISO": "BIH",
        "CountryName": "Bosnia and Herzegovina"
      },
      {
        "CountryChar2ISO": "BW",
        "CountryChar3ISO": "BWA",
        "CountryName": "Botswana"
      },
      {
        "CountryChar2ISO": "BV",
        "CountryChar3ISO": "BVT",
        "CountryName": "Bouvet Island"
      },
      {
        "CountryChar2ISO": "IO",
        "CountryChar3ISO": "IOT",
        "CountryName": "BR Indian Ocean Terr"
      },
      {
        "CountryChar2ISO": "BR",
        "CountryChar3ISO": "BRA",
        "CountryName": "Brazil"
      },
      {
        "CountryChar2ISO": "BN",
        "CountryChar3ISO": "BRN",
        "CountryName": "Brunei Darussalam"
      },
      {
        "CountryChar2ISO": "BG",
        "CountryChar3ISO": "BGR",
        "CountryName": "Bulgaria"
      },
      {
        "CountryChar2ISO": "BF",
        "CountryChar3ISO": "BFA",
        "CountryName": "Burkina Faso"
      },
      {
        "CountryChar2ISO": "BI",
        "CountryChar3ISO": "BDI",
        "CountryName": "Burundi"
      },
      {
        "CountryChar2ISO": "KH",
        "CountryChar3ISO": "KHM",
        "CountryName": "Cambodia"
      },
      {
        "CountryChar2ISO": "CM",
        "CountryChar3ISO": "CMR",
        "CountryName": "Cameroon"
      },
      {
        "CountryChar2ISO": "CA",
        "CountryChar3ISO": "CAN",
        "CountryName": "Canada"
      },
      {
        "CountryChar2ISO": "CV",
        "CountryChar3ISO": "CPV",
        "CountryName": "Cape Verde"
      },
      {
        "CountryChar2ISO": "KY",
        "CountryChar3ISO": "CYM",
        "CountryName": "Cayman Islands"
      },
      {
        "CountryChar2ISO": "CF",
        "CountryChar3ISO": "CAF",
        "CountryName": "Central African Republic"
      },
      {
        "CountryChar2ISO": "TD",
        "CountryChar3ISO": "TCD",
        "CountryName": "Chad"
      },
      {
        "CountryChar2ISO": "CL",
        "CountryChar3ISO": "CHL",
        "CountryName": "Chile"
      },
      {
        "CountryChar2ISO": "CN",
        "CountryChar3ISO": "CHN",
        "CountryName": "China-Mainland only"
      },
      {
        "CountryChar2ISO": "CX",
        "CountryChar3ISO": "CXR",
        "CountryName": "Christmas Island"
      },
      {
        "CountryChar2ISO": "CC",
        "CountryChar3ISO": "CCK",
        "CountryName": "Cocos (Keeling) Islands"
      },
      {
        "CountryChar2ISO": "CO",
        "CountryChar3ISO": "COL",
        "CountryName": "Colombia"
      },
      {
        "CountryChar2ISO": "KM",
        "CountryChar3ISO": "COM",
        "CountryName": "Comoros"
      },
      {
        "CountryChar2ISO": "CK",
        "CountryChar3ISO": "COK",
        "CountryName": "Cook Islands"
      },
      {
        "CountryChar2ISO": "CR",
        "CountryChar3ISO": "CRI",
        "CountryName": "Costa Rica"
      },
      {
        "CountryChar2ISO": "HR",
        "CountryChar3ISO": "HRV",
        "CountryName": "Croatia"
      },
      {
        "CountryChar2ISO": "CY",
        "CountryChar3ISO": "CYP",
        "CountryName": "Cyprus"
      },
      {
        "CountryChar2ISO": "CZ",
        "CountryChar3ISO": "CZE",
        "CountryName": "Czech Republic"
      },
      {
        "CountryChar2ISO": "DK",
        "CountryChar3ISO": "DNK",
        "CountryName": "Denmark"
      },
      {
        "CountryChar2ISO": "DJ",
        "CountryChar3ISO": "DJI",
        "CountryName": "Djibouti"
      },
      {
        "CountryChar2ISO": "DM",
        "CountryChar3ISO": "DMA",
        "CountryName": "Dominica"
      },
      {
        "CountryChar2ISO": "DO",
        "CountryChar3ISO": "DOM",
        "CountryName": "Dominican Republic"
      },
      {
        "CountryChar2ISO": "TL",
        "CountryChar3ISO": "TMP",
        "CountryName": "East Timor"
      },
      {
        "CountryChar2ISO": "EC",
        "CountryChar3ISO": "ECU",
        "CountryName": "Ecuador"
      },
      {
        "CountryChar2ISO": "EG",
        "CountryChar3ISO": "EGY",
        "CountryName": "Egypt"
      },
      {
        "CountryChar2ISO": "SV",
        "CountryChar3ISO": "SLV",
        "CountryName": "El Salvador"
      },
      {
        "CountryChar2ISO": "GQ",
        "CountryChar3ISO": "GNQ",
        "CountryName": "Equatorial Guinea"
      },
      {
        "CountryChar2ISO": "ER",
        "CountryChar3ISO": "ERI",
        "CountryName": "Eritrea"
      },
      {
        "CountryChar2ISO": "EE",
        "CountryChar3ISO": "EST",
        "CountryName": "Estonia"
      },
      {
        "CountryChar2ISO": "ET",
        "CountryChar3ISO": "ETH",
        "CountryName": "Ethiopia"
      },
      {
        "CountryChar2ISO": "FK",
        "CountryChar3ISO": "FLK",
        "CountryName": "Falkland (Malvinas)"
      },
      {
        "CountryChar2ISO": "FO",
        "CountryChar3ISO": "FRO",
        "CountryName": "Denmark - Faroe Islands"
      },
      {
        "CountryChar2ISO": "FJ",
        "CountryChar3ISO": "FJI",
        "CountryName": "Fiji"
      },
      {
        "CountryChar2ISO": "FI",
        "CountryChar3ISO": "FIN",
        "CountryName": "Finland"
      },
      {
        "CountryChar2ISO": "TF",
        "CountryChar3ISO": "ATF",
        "CountryName": "FR Southern Terr"
      },
      {
        "CountryChar2ISO": "FR",
        "CountryChar3ISO": "FRA",
        "CountryName": "France"
      },
      {
        "CountryChar2ISO": "GF",
        "CountryChar3ISO": "GUF",
        "CountryName": "French Guiana"
      },
      {
        "CountryChar2ISO": "PF",
        "CountryChar3ISO": "PYF",
        "CountryName": "French Polynesia"
      },
      {
        "CountryChar2ISO": "GA",
        "CountryChar3ISO": "GAB",
        "CountryName": "Gabon"
      },
      {
        "CountryChar2ISO": "GM",
        "CountryChar3ISO": "GMB",
        "CountryName": "Gambia"
      },
      {
        "CountryChar2ISO": "GE",
        "CountryChar3ISO": "GEO",
        "CountryName": "Georgia"
      },
      {
        "CountryChar2ISO": "DE",
        "CountryChar3ISO": "DEU",
        "CountryName": "Germany"
      },
      {
        "CountryChar2ISO": "GH",
        "CountryChar3ISO": "GHA",
        "CountryName": "Ghana"
      },
      {
        "CountryChar2ISO": "GI",
        "CountryChar3ISO": "GIB",
        "CountryName": "Gibraltar"
      },
      {
        "CountryChar2ISO": "GR",
        "CountryChar3ISO": "GRC",
        "CountryName": "Greece"
      },
      {
        "CountryChar2ISO": "GL",
        "CountryChar3ISO": "GRL",
        "CountryName": "Greenland"
      },
      {
        "CountryChar2ISO": "GD",
        "CountryChar3ISO": "GRD",
        "CountryName": "Grenada"
      },
      {
        "CountryChar2ISO": "GP",
        "CountryChar3ISO": "GLP",
        "CountryName": "France - Guadeloupe"
      },
      {
        "CountryChar2ISO": "GU",
        "CountryChar3ISO": "GUM",
        "CountryName": "Guam"
      },
      {
        "CountryChar2ISO": "GT",
        "CountryChar3ISO": "GTM",
        "CountryName": "Guatemala"
      },
      {
        "CountryChar2ISO": "GN",
        "CountryChar3ISO": "GIN",
        "CountryName": "Guinea"
      },
      {
        "CountryChar2ISO": "GW",
        "CountryChar3ISO": "GNB",
        "CountryName": "Guinea-Bissau"
      },
      {
        "CountryChar2ISO": "GY",
        "CountryChar3ISO": "GUY",
        "CountryName": "Guyana"
      },
      {
        "CountryChar2ISO": "HT",
        "CountryChar3ISO": "HTI",
        "CountryName": "Haiti"
      },
      {
        "CountryChar2ISO": "HM",
        "CountryChar3ISO": "HMD",
        "CountryName": "Heard & McDonald Islands"
      },
      {
        "CountryChar2ISO": "VA",
        "CountryChar3ISO": "VAT",
        "CountryName": "Holy See (Vatican City)"
      },
      {
        "CountryChar2ISO": "HN",
        "CountryChar3ISO": "HND",
        "CountryName": "Honduras"
      },
      {
        "CountryChar2ISO": "HK",
        "CountryChar3ISO": "HKG",
        "CountryName": "Hong Kong"
      },
      {
        "CountryChar2ISO": "HU",
        "CountryChar3ISO": "HUN",
        "CountryName": "Hungary"
      },
      {
        "CountryChar2ISO": "IS",
        "CountryChar3ISO": "ISL",
        "CountryName": "Iceland"
      },
      {
        "CountryChar2ISO": "IN",
        "CountryChar3ISO": "IND",
        "CountryName": "India"
      },
      {
        "CountryChar2ISO": "ID",
        "CountryChar3ISO": "IDN",
        "CountryName": "Indonesia"
      },
      {
        "CountryChar2ISO": "IE",
        "CountryChar3ISO": "IRL",
        "CountryName": "Ireland"
      },
      {
        "CountryChar2ISO": "IL",
        "CountryChar3ISO": "ISR",
        "CountryName": "Israel"
      },
      {
        "CountryChar2ISO": "IT",
        "CountryChar3ISO": "ITA",
        "CountryName": "Italy"
      },
      {
        "CountryChar2ISO": "JM",
        "CountryChar3ISO": "JAM",
        "CountryName": "Jamaica"
      },
      {
        "CountryChar2ISO": "JP",
        "CountryChar3ISO": "JPN",
        "CountryName": "Japan"
      },
      {
        "CountryChar2ISO": "JO",
        "CountryChar3ISO": "JOR",
        "CountryName": "Jordan"
      },
      {
        "CountryChar2ISO": "KZ",
        "CountryChar3ISO": "KAZ",
        "CountryName": "Kazakstan"
      },
      {
        "CountryChar2ISO": "KE",
        "CountryChar3ISO": "KEN",
        "CountryName": "Kenya"
      },
      {
        "CountryChar2ISO": "KI",
        "CountryChar3ISO": "KIR",
        "CountryName": "Kiribati"
      },
      {
        "CountryChar2ISO": "KR",
        "CountryChar3ISO": "KOR",
        "CountryName": "Korea, Republic of"
      },
      {
        "CountryChar2ISO": "KW",
        "CountryChar3ISO": "KWT",
        "CountryName": "Kuwait"
      },
      {
        "CountryChar2ISO": "KG",
        "CountryChar3ISO": "KGZ",
        "CountryName": "Kyrgyzstan"
      },
      {
        "CountryChar2ISO": "LA",
        "CountryChar3ISO": "LAO",
        "CountryName": "Lao PDR"
      },
      {
        "CountryChar2ISO": "LV",
        "CountryChar3ISO": "LVA",
        "CountryName": "Latvia"
      },
      {
        "CountryChar2ISO": "LB",
        "CountryChar3ISO": "LBN",
        "CountryName": "Lebanon"
      },
      {
        "CountryChar2ISO": "LS",
        "CountryChar3ISO": "LSO",
        "CountryName": "Lesotho"
      },
      {
        "CountryChar2ISO": "LY",
        "CountryChar3ISO": "LBY",
        "CountryName": "Libya"
      },
      {
        "CountryChar2ISO": "LI",
        "CountryChar3ISO": "LIE",
        "CountryName": "Liechtenstein"
      },
      {
        "CountryChar2ISO": "LT",
        "CountryChar3ISO": "LTU",
        "CountryName": "Lithuania"
      },
      {
        "CountryChar2ISO": "LU",
        "CountryChar3ISO": "LUX",
        "CountryName": "Luxembourg"
      },
      {
        "CountryChar2ISO": "MO",
        "CountryChar3ISO": "MAC",
        "CountryName": "Macau"
      },
      {
        "CountryChar2ISO": "MK",
        "CountryChar3ISO": "MKD",
        "CountryName": "Macedonia"
      },
      {
        "CountryChar2ISO": "MG",
        "CountryChar3ISO": "MDG",
        "CountryName": "Madagascar"
      },
      {
        "CountryChar2ISO": "MW",
        "CountryChar3ISO": "MWI",
        "CountryName": "Malawi"
      },
      {
        "CountryChar2ISO": "MY",
        "CountryChar3ISO": "MYS",
        "CountryName": "Malaysia"
      },
      {
        "CountryChar2ISO": "MV",
        "CountryChar3ISO": "MDV",
        "CountryName": "Maldives"
      },
      {
        "CountryChar2ISO": "ML",
        "CountryChar3ISO": "MLI",
        "CountryName": "Mali"
      },
      {
        "CountryChar2ISO": "MT",
        "CountryChar3ISO": "MLT",
        "CountryName": "Malta"
      },
      {
        "CountryChar2ISO": "MH",
        "CountryChar3ISO": "MHL",
        "CountryName": "Marshall Islands"
      },
      {
        "CountryChar2ISO": "MQ",
        "CountryChar3ISO": "MTQ",
        "CountryName": "France - Martinique"
      },
      {
        "CountryChar2ISO": "MR",
        "CountryChar3ISO": "MRT",
        "CountryName": "Mauritania"
      },
      {
        "CountryChar2ISO": "MU",
        "CountryChar3ISO": "MUS",
        "CountryName": "Mauritius"
      },
      {
        "CountryChar2ISO": "YT",
        "CountryChar3ISO": "MYT",
        "CountryName": "Mayotte"
      },
      {
        "CountryChar2ISO": "MX",
        "CountryChar3ISO": "MEX",
        "CountryName": "Mexico"
      },
      {
        "CountryChar2ISO": "FM",
        "CountryChar3ISO": "FSM",
        "CountryName": "Micronesia"
      },
      {
        "CountryChar2ISO": "MD",
        "CountryChar3ISO": "MDA",
        "CountryName": "Moldova, Republic of"
      },
      {
        "CountryChar2ISO": "MC",
        "CountryChar3ISO": "MCO",
        "CountryName": "Monaco"
      },
      {
        "CountryChar2ISO": "MN",
        "CountryChar3ISO": "MNG",
        "CountryName": "Mongolia"
      },
      {
        "CountryChar2ISO": "MS",
        "CountryChar3ISO": "MSR",
        "CountryName": "Montserrat"
      },
      {
        "CountryChar2ISO": "MA",
        "CountryChar3ISO": "MAR",
        "CountryName": "Morocco"
      },
      {
        "CountryChar2ISO": "MZ",
        "CountryChar3ISO": "MOZ",
        "CountryName": "Mozambique"
      },
      {
        "CountryChar2ISO": "NA",
        "CountryChar3ISO": "NAM",
        "CountryName": "Namibia"
      },
      {
        "CountryChar2ISO": "NR",
        "CountryChar3ISO": "NRU",
        "CountryName": "Nauru"
      },
      {
        "CountryChar2ISO": "NP",
        "CountryChar3ISO": "NPL",
        "CountryName": "Nepal"
      },
      {
        "CountryChar2ISO": "NL",
        "CountryChar3ISO": "NLD",
        "CountryName": "Netherlands"
      },
      {
        "CountryChar2ISO": "AN",
        "CountryChar3ISO": "ANT",
        "CountryName": "Netherlands Antilles"
      },
      {
        "CountryChar2ISO": "NC",
        "CountryChar3ISO": "NCL",
        "CountryName": "New Caledonia"
      },
      {
        "CountryChar2ISO": "NZ",
        "CountryChar3ISO": "NZL",
        "CountryName": "New Zealand"
      },
      {
        "CountryChar2ISO": "NI",
        "CountryChar3ISO": "NIC",
        "CountryName": "Nicaragua"
      },
      {
        "CountryChar2ISO": "NE",
        "CountryChar3ISO": "NER",
        "CountryName": "Niger"
      },
      {
        "CountryChar2ISO": "NG",
        "CountryChar3ISO": "NGA",
        "CountryName": "Nigeria"
      },
      {
        "CountryChar2ISO": "NU",
        "CountryChar3ISO": "NIU",
        "CountryName": "Niue"
      },
      {
        "CountryChar2ISO": "NF",
        "CountryChar3ISO": "NFK",
        "CountryName": "Norfolk Island"
      },
      {
        "CountryChar2ISO": "MP",
        "CountryChar3ISO": "MNP",
        "CountryName": "Northern Mariana Islands"
      },
      {
        "CountryChar2ISO": "NO",
        "CountryChar3ISO": "NOR",
        "CountryName": "Norway"
      },
      {
        "CountryChar2ISO": "OM",
        "CountryChar3ISO": "OMN",
        "CountryName": "Oman"
      },
      {
        "CountryChar2ISO": "PK",
        "CountryChar3ISO": "PAK",
        "CountryName": "Pakistan"
      },
      {
        "CountryChar2ISO": "PW",
        "CountryChar3ISO": "PLW",
        "CountryName": "Palau"
      },
      {
        "CountryChar2ISO": "PS",
        "CountryChar3ISO": "PSE",
        "CountryName": "Palestinian Territory"
      },
      {
        "CountryChar2ISO": "PA",
        "CountryChar3ISO": "PAN",
        "CountryName": "Panama"
      },
      {
        "CountryChar2ISO": "PG",
        "CountryChar3ISO": "PNG",
        "CountryName": "Papua New Guinea"
      },
      {
        "CountryChar2ISO": "PY",
        "CountryChar3ISO": "PRY",
        "CountryName": "Paraguay"
      },
      {
        "CountryChar2ISO": "PE",
        "CountryChar3ISO": "PER",
        "CountryName": "Peru"
      },
      {
        "CountryChar2ISO": "PH",
        "CountryChar3ISO": "PHL",
        "CountryName": "Philippines"
      },
      {
        "CountryChar2ISO": "PN",
        "CountryChar3ISO": "PCN",
        "CountryName": "Pitcairn"
      },
      {
        "CountryChar2ISO": "PL",
        "CountryChar3ISO": "POL",
        "CountryName": "Poland"
      },
      {
        "CountryChar2ISO": "PT",
        "CountryChar3ISO": "PRT",
        "CountryName": "Portugal"
      },
      {
        "CountryChar2ISO": "P1",
        "CountryChar3ISO": "PR1",
        "CountryName": "Portugal - Azores"
      },
      {
        "CountryChar2ISO": "P2",
        "CountryChar3ISO": "PR2",
        "CountryName": "Portugal–Madeira"
      },
      {
        "CountryChar2ISO": "PR",
        "CountryChar3ISO": "PRI",
        "CountryName": "Puerto Rico"
      },
      {
        "CountryChar2ISO": "QA",
        "CountryChar3ISO": "QAT",
        "CountryName": "Qatar"
      },
      {
        "CountryChar2ISO": "RE",
        "CountryChar3ISO": "REU",
        "CountryName": "France - Reunion"
      },
      {
        "CountryChar2ISO": "RO",
        "CountryChar3ISO": "ROM",
        "CountryName": "Romania"
      },
      {
        "CountryChar2ISO": "RU",
        "CountryChar3ISO": "RUS",
        "CountryName": "Russian Federation"
      },
      {
        "CountryChar2ISO": "RW",
        "CountryChar3ISO": "RWA",
        "CountryName": "Rwanda"
      },
      {
        "CountryChar2ISO": "GS",
        "CountryChar3ISO": "SGS",
        "CountryName": "S. Georgia/S. Sand. Isl"
      },
      {
        "CountryChar2ISO": "SH",
        "CountryChar3ISO": "SHN",
        "CountryName": "Saint Helena"
      },
      {
        "CountryChar2ISO": "KN",
        "CountryChar3ISO": "KNA",
        "CountryName": "Saint Kitts and Nevis"
      },
      {
        "CountryChar2ISO": "LC",
        "CountryChar3ISO": "LCA",
        "CountryName": "Saint Lucia"
      },
      {
        "CountryChar2ISO": "PM",
        "CountryChar3ISO": "SPM",
        "CountryName": "Saint Pierre and Miquelon"
      },
      {
        "CountryChar2ISO": "WS",
        "CountryChar3ISO": "WSM",
        "CountryName": "Samoa"
      },
      {
        "CountryChar2ISO": "SM",
        "CountryChar3ISO": "SMR",
        "CountryName": "San Marino"
      },
      {
        "CountryChar2ISO": "ST",
        "CountryChar3ISO": "STP",
        "CountryName": "Sao Tome and Principe"
      },
      {
        "CountryChar2ISO": "SA",
        "CountryChar3ISO": "SAU",
        "CountryName": "Saudi Arabia"
      },
      {
        "CountryChar2ISO": "SN",
        "CountryChar3ISO": "SEN",
        "CountryName": "Senegal"
      },
      {
        "CountryChar2ISO": "SC",
        "CountryChar3ISO": "SYC",
        "CountryName": "Seychelles"
      },
      {
        "CountryChar2ISO": "SL",
        "CountryChar3ISO": "SLE",
        "CountryName": "Sierra Leone"
      },
      {
        "CountryChar2ISO": "SG",
        "CountryChar3ISO": "SGP",
        "CountryName": "Singapore"
      },
      {
        "CountryChar2ISO": "SK",
        "CountryChar3ISO": "SVK",
        "CountryName": "Slovakia"
      },
      {
        "CountryChar2ISO": "SI",
        "CountryChar3ISO": "SVN",
        "CountryName": "Slovenia"
      },
      {
        "CountryChar2ISO": "SB",
        "CountryChar3ISO": "SLB",
        "CountryName": "Solomon Islands"
      },
      {
        "CountryChar2ISO": "SO",
        "CountryChar3ISO": "SOM",
        "CountryName": "Somalia"
      },
      {
        "CountryChar2ISO": "ZA",
        "CountryChar3ISO": "ZAF",
        "CountryName": "South Africa"
      },
      {
        "CountryChar2ISO": "ES",
        "CountryChar3ISO": "ESP",
        "CountryName": "Spain"
      },
      {
        "CountryChar2ISO": "E1",
        "CountryChar3ISO": "ES1",
        "CountryName": "Spain - Canary Islands"
      },
      {
        "CountryChar2ISO": "LK",
        "CountryChar3ISO": "LKA",
        "CountryName": "Sri Lanka"
      },
      {
        "CountryChar2ISO": "VC",
        "CountryChar3ISO": "VCT",
        "CountryName": "St Vincent and Gren."
      },
      {
        "CountryChar2ISO": "SR",
        "CountryChar3ISO": "SUR",
        "CountryName": "Suriname"
      },
      {
        "CountryChar2ISO": "SJ",
        "CountryChar3ISO": "SJM",
        "CountryName": "Svalbard and Jan Mayen"
      },
      {
        "CountryChar2ISO": "SZ",
        "CountryChar3ISO": "SWZ",
        "CountryName": "Swaziland"
      },
      {
        "CountryChar2ISO": "SE",
        "CountryChar3ISO": "SWE",
        "CountryName": "Sweden"
      },
      {
        "CountryChar2ISO": "CH",
        "CountryChar3ISO": "CHE",
        "CountryName": "Switzerland"
      },
      {
        "CountryChar2ISO": "TW",
        "CountryChar3ISO": "TWN",
        "CountryName": "Taiwan"
      },
      {
        "CountryChar2ISO": "TJ",
        "CountryChar3ISO": "TJK",
        "CountryName": "Tajikistan"
      },
      {
        "CountryChar2ISO": "TZ",
        "CountryChar3ISO": "TZA",
        "CountryName": "Tanzania"
      },
      {
        "CountryChar2ISO": "TH",
        "CountryChar3ISO": "THA",
        "CountryName": "Thailand"
      },
      {
        "CountryChar2ISO": "TG",
        "CountryChar3ISO": "TGO",
        "CountryName": "Togo"
      },
      {
        "CountryChar2ISO": "TK",
        "CountryChar3ISO": "TKL",
        "CountryName": "Tokelau"
      },
      {
        "CountryChar2ISO": "TO",
        "CountryChar3ISO": "TON",
        "CountryName": "Tonga"
      },
      {
        "CountryChar2ISO": "TT",
        "CountryChar3ISO": "TTO",
        "CountryName": "Trinidad and Tobago"
      },
      {
        "CountryChar2ISO": "TN",
        "CountryChar3ISO": "TUN",
        "CountryName": "Tunisia"
      },
      {
        "CountryChar2ISO": "TR",
        "CountryChar3ISO": "TUR",
        "CountryName": "Turkey"
      },
      {
        "CountryChar2ISO": "TM",
        "CountryChar3ISO": "TKM",
        "CountryName": "Turkmenistan"
      },
      {
        "CountryChar2ISO": "TC",
        "CountryChar3ISO": "TCA",
        "CountryName": "Turks and Caicos Islands"
      },
      {
        "CountryChar2ISO": "TV",
        "CountryChar3ISO": "TUV",
        "CountryName": "Tuvalu"
      },
      {
        "CountryChar2ISO": "UG",
        "CountryChar3ISO": "UGA",
        "CountryName": "Uganda"
      },
      {
        "CountryChar2ISO": "UA",
        "CountryChar3ISO": "UKR",
        "CountryName": "Ukraine"
      },
      {
        "CountryChar2ISO": "AE",
        "CountryChar3ISO": "ARE",
        "CountryName": "United Arab Emirates"
      },
      {
        "CountryChar2ISO": "GB",
        "CountryChar3ISO": "GBR",
        "CountryName": "United Kingdom"
      },
      {
        "CountryChar2ISO": "G1",
        "CountryChar3ISO": "GB1",
        "CountryName": "United Kingdom - Channel Islands"
      },
      {
        "CountryChar2ISO": "US",
        "CountryChar3ISO": "USA",
        "CountryName": "United States"
      },
      {
        "CountryChar2ISO": "UY",
        "CountryChar3ISO": "URY",
        "CountryName": "Uruguay"
      },
      {
        "CountryChar2ISO": "UM",
        "CountryChar3ISO": "UMI",
        "CountryName": "US Outlying Islands"
      },
      {
        "CountryChar2ISO": "UZ",
        "CountryChar3ISO": "UZB",
        "CountryName": "Uzbekistan"
      },
      {
        "CountryChar2ISO": "VU",
        "CountryChar3ISO": "VUT",
        "CountryName": "Vanuatu"
      },
      {
        "CountryChar2ISO": "VE",
        "CountryChar3ISO": "VEN",
        "CountryName": "Venezuela"
      },
      {
        "CountryChar2ISO": "VN",
        "CountryChar3ISO": "VNM",
        "CountryName": "Viet Nam"
      },
      {
        "CountryChar2ISO": "VG",
        "CountryChar3ISO": "VGB",
        "CountryName": "Virgin Islands, British"
      },
      {
        "CountryChar2ISO": "VI",
        "CountryChar3ISO": "VIR",
        "CountryName": "Virgin Islands, U.S."
      },
      {
        "CountryChar2ISO": "WF",
        "CountryChar3ISO": "WLF",
        "CountryName": "Wallis and Futuna"
      },
      {
        "CountryChar2ISO": "EH",
        "CountryChar3ISO": "ESH",
        "CountryName": "Western Sahara"
      },
      {
        "CountryChar2ISO": "YE",
        "CountryChar3ISO": "YEM",
        "CountryName": "Yemen"
      },
      {
        "CountryChar2ISO": "YU",
        "CountryChar3ISO": "YUG",
        "CountryName": "Serbia and Montenegro"
      },
      {
        "CountryChar2ISO": "ZM",
        "CountryChar3ISO": "ZMB",
        "CountryName": "Zambia"
      }
    ]
  }
};