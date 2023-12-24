const foo = ["one", "two", "three"];
console.log(...foo);

const [one] = foo;
console.log(one);

function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a);
console.log(b);

// ---------challenge
const color = ["red", "blue", "green", "yellow"];
const [color1, color2, color3] = color;
console.log(color1, color2, color3);

// object desctructuring
const student = { name: "saunak", position: "first", rollno: 20 };
const { name, position, rollno } = student;
console.log(name);
console.log(position);
console.log(rollno);

// -----------challenge
const person = {
  name2: "saunak",
  age: 20,
  gender: "male",
  country: "india",
};
const { name2, age, country } = person;
console.log(name2);
console.log(age);
console.log(country);
