
 let correctAnswers = 0;
 let incorrectAnswers = 0;

let arr = [[
  'Сколько будет 2 + 2?', 
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
   'Сколько будет 2 * 2?',
   'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
   'Сколько будет 2 + 2 * 2?'], 
   [4,1,4,12,6]];

for(let i = 0; i<5; i++){
  let userAnswer = prompt(arr[0][i]);
  if (userAnswer == arr[1][i]) {
    alert('Верно!');
    correctAnswers++;
  }else{
    alert('Не верно');
    incorrectAnswers++;
  }
}
alert(`Верных ответов: ${correctAnswers}`);
alert(`Не верных ответов: ${incorrectAnswers}`);


// let correctAnswers = 0;
// let incorrectAnswers = 0;
// let questionPrompts = [[
//   'Сколько будет 2 + 2?', 
//   'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
//   'Сколько будет 2 * 2?',
//   'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
//   'Сколько будет 2 + 2 * 2?'],[
//     2,1,4,12,6
//   ]];

//   for (let i = 0, i<=5, i++) {
//     let userAnswer = prompt(questionPrompts[i]);
//     if (userAnswer == questionPrompts[1].[i]) {
//       correctAnswers++;
//     } else {
//       incorrectAnswers++;
//     }    
//   }