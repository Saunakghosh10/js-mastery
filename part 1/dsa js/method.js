// method 1 ----

// function greet() {
//   return `i am ${person.name} and i am ${person.age} years old`;
// }

// const person = {
//   name: "saunak",
//   age: "21",
//   greet ,
// };

// console.log(person.greet())

// method 2 ----

// most used --

const person = {
  name: "saunak",
  age: 21,
  greet: function () {
    return `hellow my name is ${person.name} and my age is ${person.age} `;
  },
};

console.log(person.greet());

const name2 = {
  name: "ghosh",
  age: 20,
  work: "mc ",
  greet2: function () {
    return `hi my name is ${name2.name} and age is ${name2.age} and i work in ${name2.work}`;
  },
};

console.log(name2.greet2());
