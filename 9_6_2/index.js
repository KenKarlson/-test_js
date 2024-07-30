const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function merge(arr1, arr2) {
  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1, arr2);

}
const newArr = (merge(arr1, arr2));
console.log('arr1: '+ arr1);
console.log('arr2: '+ arr2);
console.log('newArr: '+ newArr);
const arr3 = arr1.concat(...arr1, ...'the best numbers',...arr2);//!:) ...
console.log('arr3: ' + arr3); //?!!!!