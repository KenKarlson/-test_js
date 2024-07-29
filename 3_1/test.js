const temperatureInCelsius = +prompt('Введите температуру в градусах Цельсия').trim();
console.log(typeof temperatureInCelsius);
if (!Number.isNaN(temperatureInCelsius) && temperatureInCelsius === 0 ) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
console.log(!Number.isNaN(temperatureInCelsius));
// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
// console.log(temperatureIncelsius);
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);