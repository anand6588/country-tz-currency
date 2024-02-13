var ctzc = require('./src/index.js');

console.log('Default locale: ' + ctzc.getLocale());

ctzc.setLocale('fr');

console.log('Selected locale: ' + ctzc.getLocale());

console.log('\n\n' + JSON.stringify(ctzc.getAllCurrencies(), null, 2) + '\n\n');
