async function test (){

while(1) {
const usd = await (await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/today/")).json()

console.log(usd)

const sell = await document.getElementById('api sell');
const buy = await document.getElementById('api buy');

buy.textContent = "Cena kupna dolara amerykanskiego wynosi: " + await JSON.stringify(usd.rates[0].ask) + " zł."
sell.textContent = "Cena sprzedaży dolara amerykanskiego wynosi: " + await JSON.stringify(usd.rates[0].bid)  + " zł."
await sleep(5000)
}
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

test ()
