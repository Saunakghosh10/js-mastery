// normal fn -->
function greet(username) {
  return `hello ${username}`;
}
console.log(greet("saunak"));

// arrow fn -->

greet2 = (user) => {
  return `hello ${user}`;
};
console.log(greet2("saunak"));
// --------

greet3 = (username) => {
  return `my name is ${username}`;
};
console.log(greet3("saunak"));

// ---challenge
setTimeout(() => {
  console.log("hello");
  setTimeout =
    (() => {
      console.log("hey");
      setTimeout =
        (() => {
          console.log("namaste");
          setTimeout =
            (() => {
              console.log("hi");
              setTimeout =
                (() => {
                  console.log("bonjour");
                },
                2000);
            },
            2000);
        },
        6000);
    },
    2000);
}, 2000);
