# country-tz-currency

## Install
```
npm install country-tz-currency --save
```
## Usage

```
var ctzc 	=	require('country-tz-currency');

ctzc.getAllCountries() //Returns list of country objects

ctzc.getAllTimezones() //Returns list of timezone objects

ctzc.getAllCurrencies() //Returns list of currency objects

ctzc.getCountryByCode("US") 
/*
Returns :
{
  "countryName":"United States",
  "countryNumber":"840",
  "alpha3":"USA",
  "areaCode":"+1",
  "currencyCode":"USD",
  "timeZone":[ "America/New_York" , "America/Detroit" , "America/Kentucky/Louisville" , "America/Kentucky/Monticello" , "America/Indiana/Indianapolis" , "America/Indiana/Vincennes" , "America/Indiana/Winamac" , "America/Indiana/Marengo" , "America/Indiana/Petersburg" , "America/Indiana/Vevay" , "America/Chicago" , "America/Indiana/Tell_City" , "America/Indiana/Knox" , "America/Menominee" , "America/North_Dakota/Center" , "America/North_Dakota/New_Salem" , "America/North_Dakota/Beulah" , "America/Denver" , "America/Boise" , "America/Phoenix" , "America/Los_Angeles" , "America/Anchorage" , "America/Juneau" , "America/Sitka" , "America/Yakutat" , "America/Nome" , "America/Adak" , "America/Metlakatla" , "Pacific/Honolulu" ],
  "capital":"Washington, D.C."
}
*/
```