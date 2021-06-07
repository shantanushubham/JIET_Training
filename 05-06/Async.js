// async function myFunction() {
//   return "Hello";
// }

// myFunction().then((value) => {
//   console.log(value);
// });

let testFunction = async () => {
  let testPromise = new Promise((myResolve, myReject) => {
    setTimeout(() => {
      myResolve("Hi! I am from JIET");
    }, 3000);
  });
  let result = await testPromise;
  console.log(result);
  return result;
};

testFunction();
console.log(testFunction());
