var furniture = ["Table", "Chair", "Sofa", "Bed", "Couch"];

furniture.push("Dressing Table");

console.log(furniture);

console.log(furniture.pop());

var vegetables = ["Tomato", "Potato", "Brinjal", "Cauliflower"];

vegetables.unshift("Beans");

console.log(vegetables.shift());
console.log(vegetables);

var fruits = ["Mango", "Banana", "Pineapple", "Apple"];
fruits.splice(2, 0, "Strawberry", "Orange");
console.log(fruits);

var boys = ["John", "Joe", "Michael", "James"];
var girls = ["Ashley", "Taylor", "Jennifer", "Britney"];
var teachers = ["Krishna", "Vedankur", "Swati", "Abhishek", "Shantanu"];
var classChildren = boys.concat(girls, teachers);
classChildren = classChildren.concat("Anurag");

console.log(classChildren);

var fruits = ["Mango", "Banana", "Apple", "Orange"];
var fruits2 = fruits.slice(1, 3);
console.log(fruits);
console.log(fruits2);

var fruits = ["Mango", "Banana", "Apple", "Orange"];
console.log(fruits.toString());

var numbers = [10, 15, 20, 25, 30, 35];
var minimum = Number.MAX_VALUE;
var maximum = Number.MIN_VALUE;
for (let number of numbers) {
  minimum = Math.min(minimum, number);
  maximum = Math.max(maximum, number);
}
console.log("Maximum: " + maximum, "Minimum: " + minimum);

var numbers = [10, 15, 20, 25, 30, 35];
var maximum = Math.max(...numbers);
var minimum = Math.min(...numbers);
console.log("Maximum: " + maximum, "Minimum: " + minimum);

var fruits = ["Pineapple", "Apple", "Dragonfruit", "Orange"];
console.log(fruits.sort());
