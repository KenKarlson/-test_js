//Оценка качества обслуживания
//Спросить 5 раз
//Если Число, если от 1-10 то участвует в опросе
//Если не число или меньше 1 или больше 10 то не участвует в опросе
const clientsEstimations = [];
function askClientToGiveEstimation(){
  let input = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
  if (!isNaN(input) && input >= 1 && input <= 10){    
      clientsEstimations.push(input);  
    }else{
      return;
    }
}
for(let i = 0; i < 5; i++){
  askClientToGiveEstimation();
}
let notGoodEstimations = clientsEstimations.filter(x => x <= 5);
notGoodEstimations.push();
let goodEstimations = (clientsEstimations.filter((num)=>{
  return num > 5;
}));
// let goodEstimations = clientsEstimations.filter(x => x > 5);
// goodEstimations.push();
console.log(goodEstimations);
console.log(notGoodEstimations);
console.log(clientsEstimations);
alert(`Всего положительных оценок: ${goodEstimations.length}`);
alert(`Всего отрицательных оценок: ${notGoodEstimations.length}`);
