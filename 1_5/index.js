// Ввод строки, обрезка по указанному символу
let slicer = function(elem){
  console.log(elem);
  let result;
  if (elem === "") {
    return 0;
  } else {
    result = elem.trim();
    result = Number(elem);
    return elem;
  }
}
let userString = prompt("Введите строку для обрезки").trim();
let startSliceIndex = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
);
let stopSliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки");
let newUserString = "";

startSliceIndex = slicer(startSliceIndex);
stopSliceIndex = slicer(stopSliceIndex);

newUserString = userString.slice(startSliceIndex, stopSliceIndex);

alert(`New string: ${newUserString}`);