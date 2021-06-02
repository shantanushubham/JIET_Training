function testFunction(value) {
  console.log(value);
}

function printSquare(value) {
  console.log(value ** 2);
}

function sumOfTwoNumbers(a, b, callbackFunction) {
  var sum = a + b;
  callbackFunction(sum);
}

sumOfTwoNumbers(5, 6, testFunction);
sumOfTwoNumbers(5, 6, printSquare);

function verifyUserCredentials(inputEmail, inputPassword) {
  var user = User.findOne({ email: inputEmail }, function (error) {
    if (!error) {
      if (user.password === inputPassword) {
        console.log("Login Successful");
      } else {
        console.log("Login was unsuccessful");
      }
    } else {
      console.log(
        "There was an error in getting the user with email:" + inputEmail
      );
    }
  });
  console.log(user);
}

function test1(a, callback) {
  callback();
  return a;
}

function test2() {
  var myVar = test1(5, function () {
    console.log(myVar);
  });
  console.log(myVar);
}

test2();
