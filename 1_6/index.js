//Получить данные
let userText = prompt("Введите текст").trim();
let wordFromText = prompt("Введите слово из текста").trim();

//Найти слово
function fintWord(string, word){
  return string.indexOf(word);
}

let indexOfWord = fintWord(userText, wordFromText);
console.log(indexOfWord);
// Вывод результата
if (indexOfWord !== -1) {
  alert("Слово найдено");
  let string = userText.slice(0, indexOfWord );
  console.log(string);
}

// //Получить данные
// let userText = prompt("Введите текст").trim();
// let wordFromText = prompt("Введите слово из текста").trim();

// //Найти слово
// function fintWord(string, word){
//   return string.indexOf(word);
// }

// let indexOfWord = fintWord(userText, wordFromText);
// console.log(indexOfWord);
// // Вывод результата
// if (indexOfWord !== -1) {
//   alert("Слово найдено");
//   let string = `Результат: ${userText.slice(0, indexOfWord )}`
//   alert(string);
// }

console.log('' ?? 'Done');
console.log('' || 'Done');