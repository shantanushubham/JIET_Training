// function testFunction1() {
//   var a = 100;
//   console.log(a);
//   return function () {
//     console.log(a + 1);
//   };
// }

// var x = testFunction1();
// x();

function testFunction1() {
  var a = 100;
  function testFunction2() {
    var b = 200;
    return function () {
      console.log(a, b);
    };
  }
  return testFunction2();
}

var x = testFunction1();
console.log(x);
x()
