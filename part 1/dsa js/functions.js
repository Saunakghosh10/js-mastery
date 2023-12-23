//function declaration
function greet() {
  console.log("function");
}

//call , run , execute
greet();

function sayhello(name) {
  console.log(`hello ${name}`);
}

sayhello("saunak");

function add(x, y) {
  return x + y;
}
const res = add(10, 20);
console.log(res);

// challenge  ----------
function myfunction(a, b) {
  return a * b;
}
const numbers = myfunction(10, 20);
console.log(numbers);

// function expression ----
const greetings = function (user) {
  console.log(`hello ${user}`);
};
console.log("saunak");

// callback functions  ---
function showcallfunc(fn) {
  const value = 10;
  fn(value);
}
showcallfunc(function (value) {
  console.log(value);
});

// 2 -->
function greet2(name, cb) {
  console.log(`hello ${name}`);
  cb();
}

function cb() {
  console.log("i am a programmer");
}

greet2("saunak", cb);


