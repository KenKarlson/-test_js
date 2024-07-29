function getSumOfSequence(number){
  const arr = [];
  let result = 0;
  for(let i = 1; i<=number;i++){
    arr.push(i);
  }
  result = arr[0]+arr[arr.length-1];
  return result;
}
console.log(getSumOfSequence(5));