function giveme4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "blue", "green", "teal"];

giveme4(...colors);

// ----------------------
const strnums = ["one", "two", "three"];
const morestrs = ["four", "five", "six"];

const concat = [...strnums, ...morestrs];
console.log(concat);

// ---------------
let people = ["saunak", "ghosh", "hehe"];
const allpeps = console.log("ghum", ...people);
console.log(allpeps);

//---------------
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// ---------challenge-----------

let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
  name: "jen",
  age: 22,
};

const clone = { ...arr, ...arr2, ...user };
console.log(clone);
