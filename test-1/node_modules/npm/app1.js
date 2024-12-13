import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI('fca_live_K9EybviZfJSGzcFn4Bk2fhp0CzFnA7UYIAVov0q1');

export async function free_currency_converter (fromCurrency, toCurrency, units){
const res=await currencyApi.latest({
base_currency:fromCurrency,
currencies:toCurrency

})

const today_rate=res.data[toCurrency]
return today_rate

}