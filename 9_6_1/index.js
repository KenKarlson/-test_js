//Сортировка массива
const number = [11,122,30,1,23,65,4,53,-6,7,8,924,170];
const str = ['Anna', 'Ivan', 'Vasya', 'Petya', 'Kolya', 'Misha', 'Tom', 'John', 'Boris'];

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
function sortString(arr) {
  return arr.sort((a, b) => a > b ? 1 : -1);
}
console.log(sortArray(number));
console.log(sortString(str));