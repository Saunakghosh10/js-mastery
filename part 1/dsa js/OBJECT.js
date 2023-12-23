const person = {
  firstname: "saunak",
  lastname: "ghosh",
  age: "20",
  location: ["planner", "earthing"],
  isProgrammer: true,
};
// console.log(person);

//accessing items from array ->
console.log(person.isProgrammer);
console.log(person.age);
console.log(person.firstname);

//challenge
let car = {
  name: "bmw",
  type: "race",
  model: "m3gtr",
  color: "bluewhite",
};

console.log(typeof car);
console.log(car.type);

console.log((car.type = "toyota"));

car.wheels = 4;
console.log(car);
