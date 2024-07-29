const clientsEstimations = [];





const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
console.log(prices);
function getNewPrices(prices, coin) {
    return prices.map(price => price + coin);
}
const newPrices = getNewPrices(prices, 0.5);
console.log(newPrices);
alert(`Кофе ${coffees[0]} сейчас стоит ${newPrices[0]} евро\nКофе ${coffees[1]} сейчас стоит ${newPrices[1]} евро\nКофе ${coffees[2]} сейчас стоит ${newPrices[2]} евро`);
console.log('end');