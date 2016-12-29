# country-tz-currency

## Install
```
npm install country-tz-currency --save
```
## Usage

```JavaScript
var ctzc 	=	require('country-tz-currency');

ctzc.getAllCountries() //Returns list of country objects

ctzc.getAllTimezones() //Returns list of timezone objects

ctzc.getAllCurrencies() //Returns list of currency objects
```

```JavaScript
ctzc.getCountryByCode( "US" ) //Expects two digit country code
//Returns : Country object
//{
//  "countryName":"United States",
//  "countryNumber":"840",
//  "alpha3":"USA",
//  "areaCode":"+1",
//  "currencyCode":"USD",
//  "timeZone":[ "America/New_York" , "America/Detroit" , "America/Kentucky/Louisville" , "America/Kentucky/Monticello" , "America/Indiana/Indianapolis" , "America/Indiana/Vincennes" , "America/Indiana/Winamac" , "America/Indiana/Marengo" , "America/Indiana/Petersburg" , "America/Indiana/Vevay" , "America/Chicago" , "America/Indiana/Tell_City" , "America/Indiana/Knox" , "America/Menominee" , "America/North_Dakota/Center" , "America/North_Dakota/New_Salem" , "America/North_Dakota/Beulah" , "America/Denver" , "America/Boise" , "America/Phoenix" , "America/Los_Angeles" , "America/Anchorage" , "America/Juneau" , "America/Sitka" , "America/Yakutat" , "America/Nome" , "America/Adak" , "America/Metlakatla" , "Pacific/Honolulu" ],
//  "capital":"Washington, D.C."
//}
```

```JavaScript
ctzc.getCurrencyByCode( "USD" ) //Expects three digit currency code
//Returns : Currency object
//{
//    "symbol": "$",
//    "name": "US Dollar",
//    "symbol_native": "$",
//    "decimal_digits": 2,
//    "rounding": 0,
//    "code": "USD",
//    "name_plural": "US dollars"
//}
```

```JavaScript
ctzc.getCurrencyByCountryCode( "US" ) //Expects two digit country code
//Returns : Currency object
//{
//    "symbol": "$",
//    "name": "US Dollar",
//    "symbol_native": "$",
//    "decimal_digits": 2,
//    "rounding": 0,
//    "code": "USD",
//    "name_plural": "US dollars"
//}
```

```JavaScript
ctzc.getTzById( "America/New_York" ) //Expects timezone id
//Returns : Timezone object
//{
//    "displayName":"Eastern Standard Time",
//    "isObserveDST":"true",
//    "dstOffset":3600000,
//    "offset":-18000000,
//    "GMT":"-5:00",
//    "id":"America/New_York"
//}
```

```JavaScript
ctzc.getTzIdsByCountryCode( "US" ) //Expects two digit country code
//Returns : Array of timezone-ids
//[ "America/New_York" , "America/Detroit" , "America/Kentucky/Louisville" , "America/Kentucky/Monticello" , "America/Indiana/Indianapolis" , "America/Indiana/Vincennes" , "America/Indiana/Winamac" , "America/Indiana/Marengo" , "America/Indiana/Petersburg" , "America/Indiana/Vevay" , "America/Chicago" , "America/Indiana/Tell_City" , "America/Indiana/Knox" , "America/Menominee" , "America/North_Dakota/Center" , "America/North_Dakota/New_Salem" , "America/North_Dakota/Beulah" , "America/Denver" , "America/Boise" , "America/Phoenix" , "America/Los_Angeles" , "America/Anchorage" , "America/Juneau" , "America/Sitka" , "America/Yakutat" , "America/Nome" , "America/Adak" , "America/Metlakatla" , "Pacific/Honolulu" ]
```

```JavaScript
ctzc.getTzsByCountryCode( "GB" ) //Expects two digit country code
//Returns : Array of timezones
//[{
//    "displayName":"Greenwich Mean Time",
//    "isObserveDST":"true",
//    "dstOffset":3600000,
//    "offset":0,
//    "GMT":"0:00",
//    "id":"Europe/London"
//}]
```

#### Note:
* Returns undefined for invalid param