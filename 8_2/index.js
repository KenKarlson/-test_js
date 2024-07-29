
//Если number не является числом или undefine, то возвращает NaN
//Если type === 'odd', то возвращает true и считаем нечетный number
//Если type === 'even', то возвращает true и считаем четный number
//Если type === '', то возвращает true и считаем полный number

let a = 'a'
console.log(Number.isNaN(a));

function getSumOfNumbers(number, type){
  let sum = 0;
  if(!Number.isNaN(number) && number == undefined) {
    return NaN;
  }else {
    switch(type){
      case 'odd':
        for(let i = 0; i <= number; i++) 
          i % 2 !== 0? sum += i: sum;
          return sum;
        break;
      case 'even':
        for(let i = 0; i <= number; i++) 
          i % 2 === 0 ? sum += i: sum;
          return sum;
        break;
      case '':
        for(let i = 0; i <= number; i++) 
        sum += i;
        return sum;
        break;
      case undefined:
        for(let i = 0; i <= number; i++) 
          sum += i;
          return sum;
          break;
    }   
  } 
}
console.log(getSumOfNumbers(10,));