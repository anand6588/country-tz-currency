var i18next = require('i18next');

var data = require('../data/data.json');

var en = require('../locales/en.json');
var fr = require('../locales/fr.json');

class countryTzCurrency {
	constructor() {
		this.locale = 'en';

		this.i18next = i18next;

		this.i18next.init({
			lng: this.locale,
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
	}

	setLocale = function (locale) {
		this.locale = locale;

		this.i18next.changeLanguage(locale);
	};

	getLocale = function () {
		return this.locale;
	};

	getAllCountries = function () {
		return data.countries;
	};

	getAllTimezones = function () {
		return data.timezones;
	};

	getAllCurrencies = function () {
		return data.currencies;
	};

	getCountryByCode = function (code) {
		return this.getAllCountries()[code];
	};

	getCurrencyByCode = function (code) {
		return this.getAllCurrencies()[code];
	};

	getCurrencyByCountryCode = function (code) {
		var country = this.getAllCountries()[code];

		return country ? this.getCurrencyByCode(country.currencyCode) : undefined;
	};

	getTzById = function (timezoneId) {
		return this.getAllTimezones()[timezoneId];
	};

	getTzIdsByCountryCode = function (code) {
		var country = this.getAllCountries()[code];

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
