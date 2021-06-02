var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findAverageOfArray(arr) {
  var avg = 0;
  for (var el of arr) {
    avg = avg + el;
  }

  return avg / a.length;
}

function printArray(arr) {
  var printString = "";
  for (var el of arr) {
    printString = printString + el + " ";
  }
  console.log(printString.trimEnd());
}

console.log(findAverageOfArray(a));
printArray(a);

var z = Math.min(5, 2);
console.log(z);

console.log(null == undefined)
console.log(null === undefined)
