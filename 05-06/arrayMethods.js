var array = [1, 10, 18, 26, 84];
var arr2 = array.filter((el) => {
  return el < 20;
});
console.log(arr2);

var myArray = [100, 28, 50];
var myArr2 = myArray.reduce((total, el) => {
  return total + el;
});
console.log(myArr2);

var numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((totalValue, currentValue) => totalValue + currentValue)

console.log(sum);

var strArr = ["John", "Ashley", "Joe", "Taylor"];

let string = strArr.reduce((startEl, currentEl) => {
  return startEl + currentEl;
});

console.log(string);
