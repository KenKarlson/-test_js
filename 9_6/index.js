//Посчитать кубы всех чисел массива
// Всеми доступными методами:
const numbers = [10, 4, 100, -5, 54, 2];
//--------------------------------------------------------------------------------
let cubeSum = numbers.reduce((a, item) => {return a + (item ** 3)}, 0);
console.log('Reduce: '+cubeSum);
//--------------------------------------------------------------------------------
let cubeSumFor = 0;
for (let index = 0; index < numbers.length; index++) {
  cubeSumFor = cubeSumFor +  (numbers[index] ** 3);  
}
console.log('For: '+cubeSumFor);
//--------------------------------------------------------------------------------
let cubeSumForOf = 0;
for (let element of numbers) {
  cubeSumForOf = cubeSumForOf + (element ** 3);
}
console.log('ForOf :'+cubeSumForOf);
//--------------------------------------------------------------------------------
let sumForEach = 0;
numbers.forEach((item) => {
  sumForEach = sumForEach + item**3;
});
console.log('ForEach: '+sumForEach);