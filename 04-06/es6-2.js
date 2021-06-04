// // var fruits = ["Apple", "Banana", "Orange"];
// // console.log(fruits);

// // var fruits2 = [...fruits, "Strawberry"];
// // console.log("Fruits2", fruits2);
// // console.log("Fruits", fruits);

// // var obj = {
// //   name: "The Alchemist",
// //   author: "Paulo Coleho",
// //   genre: "Motivational",
// // };

// // console.log(obj);
// // var obj2 = { ...obj, releaseYear: 2010 };
// // console.log(obj);
// // console.log(obj2);

// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   getName = () => {
// //     return this.name;
// //   };

// //   setName = (name) => {
// //     this.name = name;
// //   };

// //   usePerson = () => {
// //     return [this.name, this.setName];
// //   };
// // }

// // var person = new Person("Shantanu", 23);
// // let [a, b] = person.usePerson();
// // console.log(a);
// // b("Satyam");
// // console.log(person.name);

// // var doctor = {
// //   name: "Sourav Mandal",
// //   place: "Kolkata",
// //   field: "Cardiology",
// //   age: 24,
// //   practiceStartTime: "12:30 PM",
// //   practiceEndTime: "6:30 PM",
// //   interests: ["Blood", "Coronary Diseases", "Stroke", "Heart Attack"],
// //   operationsDone: 15,
// // };

// // let { interests, name: doctorName, age, field, graduationYear } = doctor;

// // console.log(doctorName);
// // doctor.name = "Satyam Keshri";
// // console.log(doctorName);

// // console.log(interests, doctorName, age, field, graduationYear);

// let z = 6;
// // console.log(z <= 5 ? z : "Value is greater than 5");
// var printMessage;
// z <= 5 &&
//   (() => {
//     printMessage = z;
//   })();

// let a;
// console.log(printMessage)

// // a = a ?? { name: "Satyam" };
// // console.log(a);

// function sumOfTwoNumbers(a, b) {
//   console.log(a + b);
// }
// sumOfTwoNumbers(5, 6);

// (function (a, b) {
//   console.log(a + b);
// })(5, 6);

// let a = -2;

// (a > 0 || a % 2 === 0) &&
//   (() => {
//     console.log("Number is greater than zero and is even.");
//   })();

// var arr = ["Naan", "Daal Baati", "Biryani"];
// var arr2 = arr.map((el) => {
//   return "Shantanu loves: " + el;
// });

// console.log(arr2)

var obj = {
  name: "Shantanu",
  age: 23,
  interests: {
    sports: ["Fighting", "Hockey"],
    food: ["Indian", "Mexican", "Italian"],
  },
};

console.log(obj?.favorites?.movies)
