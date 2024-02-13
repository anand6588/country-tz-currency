var i18next = require('i18next');

var data = require('../data/data.json');

var en = require('../data/locales/en.json');
var fr = require('../data/locales/fr.json');

class countryTzCurrency {
	#locale = 'en';
	#i18next = i18next;
	#countries = {};
	#currencies = {};
	#timezones = {};

	constructor() {
		this.#i18next.init({
			lng: this.#locale,
			resources: {
				en: {
					translation: en
				},
				fr: {
					translation: fr
				}
			},
			fallbackLng: 'en'
		});

		this.#setCountries();
		this.#setCurrencies();
	}

	#setCountries = function () {
		this.#countries = Object.keys(data.countries).reduce(
			(countries, code) =>
				Object.assign(countries, {
					[code]: Object.assign(data.countries[code], {
						countryName: this.#i18next.t('countries.' + code),
						capital: this.#i18next.t('capitalCities.' + code)
					})
				}),
			{}
		);
	};

	#setCurrencies = function () {
		this.#currencies = Object.keys(data.currencies).reduce(
			(currencies, code) =>
				Object.assign(currencies, {
					[code]: Object.assign(data.currencies[code], {
						name: this.#i18next.t('currencies.singular.' + code),
						name_plural: this.#i18next.t('currencies.plural.' + code)
					})
				}),
			{}
		);
	};

	#setTimezones = function () {
		this.#timezones = Object.keys(data.timezones).reduce(
			(timezones, id) =>
				Object.assign(timezones, {
					[id]: Object.assign(data.timezones[id], {
						name: this.#i18next.t('timezones.' + id)
					})
				}),
			{}
		);
	};

	setLocale = function (locale) {
		this.#locale = locale;

		this.#i18next.changeLanguage(this.#locale);

		this.#setCountries();
		this.#setCurrencies();
		this.#setTimezones();
	};

	getLocale = function () {
		return this.#locale;
	};

	getAllCountries = function () {
		return this.#countries;
	};

	getAllTimezones = function () {
		return data.timezones;
	};

	getAllCurrencies = function () {
		return this.#currencies;
	};

	getCountryByCode = function (code) {
		return this.#countries[code];
	};

	getCurrencyByCode = function (code) {
		return this.#currencies[code];
	};

	getCurrencyByCountryCode = function (code) {
		var country = this.#countries[code];

		return country ? this.getCurrencyByCode(country.currencyCode) : undefined;
	};

	getTzById = function (timezoneId) {
		return this.#timezones[timezoneId];
	};

	getTzIdsByCountryCode = function (code) {
		var country = this.#countries[code];

		return country ? country.timeZone : undefined;
	};

	getTzsByCountryCode = function (code) {
		var tzIds = this.getTzIdsByCountryCode(code);

		if (tzIds) {
			var tzs = [];
			var len = tzIds.length;

			for (var i = 0; i < len; i++) {
				tzs.push(this.getTzById(tzIds[i]));
			}

			return tzs;
		}
	};
}

module.exports = new countryTzCurrency();
