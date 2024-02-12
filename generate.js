const data = require('./data/data.json');

const countries = data.countries;
const currencies = data.currencies;
const timezones = data.timezones;

const countryNames = Object.keys(countries).reduce((countryNames, code) => Object.assign(countryNames, { [code]: countries[code].countryName }), {});

const countryCapitalCities = Object.keys(countries).reduce(
	(countryCapitalCities, code) => Object.assign(countryCapitalCities, { [code]: countries[code].capital }),
	{}
);

const singularCurrencyNames = Object.keys(currencies).reduce(
	(singularCurrencyNames, code) => Object.assign(singularCurrencyNames, { [code]: currencies[code].name }),
	{}
);

const pluralCurrencyNames = Object.keys(currencies).reduce(
	(pluralCurrencyNames, code) => Object.assign(pluralCurrencyNames, { [code]: currencies[code].name_plural }),
	{}
);

const timezoneNames = Object.keys(timezones).reduce((timezoneNames, id) => Object.assign(timezoneNames, { [id]: timezones[id].displayName }), {});

console.log(`\n\n\n${JSON.stringify(timezoneNames, null, 2)}\n\n`);
