var data 	=	require( '../data/data.json' );


var countryTzCurrency 	=	function()
{
	this.getAllCountries  = function()
	{
		return data.countries;
	}

	this.getAllTimezones =	function()
	{
		return data.timezones;
	}

	this.getAllCurrencies  =	function()
	{
		return data.currencies;
	}

	this.getCountryByCode  = 	function( code )
	{
		return this.getAllCountries()[code];
	}

	this.getCurrencyByCode  =	function( code )
	{
		return this.getAllCurrencies()[code];
	}

	this.getCurrencyByCountryCode  = 	function( code )
	{
		var country 		=	this.getAllCountries()[code];
		return country ? this.getCurrencyByCode( country.currencyCode ) : undefined;
	}

	this.getTzById =	function( timezoneId )
	{
		return this.getAllTimezones()[timezoneId];
	}

	this.getTzIdsByCountryCode  =	function( code )
	{
		var country 		=	this.getAllCountries()[code];
		return country ? country.timeZone : undefined;
	}

	this.getTzsByCountryCode =	function( code )
	{
		var tzIds 			=	this.getTzIdsByCountryCode( code );
		if( tzIds )
		{
			var tzs 		=	[];
			var len 		=	tzIds.length;
			for( var i=0; i<len; i++ )
			{
				tzs.push( this.getTzById( tzIds[i] ) );
			}
			return tzs;
		}
	}
}

module.exports = new countryTzCurrency();