var obj = {
  name: "Shantanu",
  address: "Jharkhand",
};

for (let key in obj) {
  console.log(key, obj[key]);
  if (key === "name") {
    break;
  }
}

var arr = [10, 20, 30, 40, 50];

for (let el of arr) {
  console.log(el);
  if (el === 30) {
    break;
  }
}

arr.forEach(function (el) {
  console.log(el)
  // if (el == 30) {
  //   break;
  // }
})
