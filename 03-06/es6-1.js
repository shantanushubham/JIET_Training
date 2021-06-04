// // function sumOfTwoNumbers(a, b) {
// //   return a + b;
// // }

// // var sumOfTwoNumbers = (a, b) => {
// //   return a + b;
// // };

// // console.log(sumOfTwoNumbers(5, 6));

// var factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 2;
//   }
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// var arr1 = [1, 2, 3, 4, 5];

// var reverseArray = (arr) => {
//   let length = arr.length;
//   let start = 0;
//   let end = length - 1;
//   let mid = length / 2;
//   while (start <= mid && end >= mid) {
//     swap(arr, start, end);
//     start++;
//     end--;
//   }
//   return arr;
// };

// var swap = (array, i, j) => {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// };

// console.log(reverseArray(arr1));

// function sumOfThreeNumbers(a, b, c = 0) {
//   return a + b + c;
// }

// console.log(sumOfThreeNumbers(5, 6, 11))

// function sum(...args) {
//   console.log(args)
//   let result = 0;
//   for (let element of args) {
//     result = result + element;
//   }
//   return result;
// }

// console.log(sum(5, 11, 52, 100, 4, 9));

// var arr = ["Mango", "Apple"];
// console.log(arr.includes("Mango"));

// const person = {
//   firstName: "Shantanu",
//   lastName: "Shubham",
//   age: 23,
//   eyeColor: "Brown"
// }

// console.log(Object.values(person))

// let myPromise = new Promise((myResolve, myReject) => {
//   setTimeout(() => {
//     myResolve("Hi! I'm Shantanu");
//   }, 3000);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

let myPromise2 = new Promise((myResolve, myReject) => {
  let a = 5;
  let b = 5;
  if (a + b > 10) {
    myReject("Promise failed!");
  } else {
    myResolve(a + b);
  }
});

myPromise2
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

// .then() promise fulfilled
// .catch() promise was failed
