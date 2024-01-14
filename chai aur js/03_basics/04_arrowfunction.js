const user = {
  username: "saunak",
  price: 100,

  welcome: function () {
    console.log(`${this.username} welcome to our website`);
    console.log(this);
  },
};

// user.welcome();
// user.username = "ghosh";
// user.welcome();

console.log(this);

// arrow function- ------------
// number 1 ----------
// function arow() {
//   let username = "saunak";
//   console.log(this.username);
//   console.log(username);
// }

// arow();

// number 2 ----------
// const chai = function () {
//   let username = "saunak";
//   console.log(this.username);
// };

// chai();

// number 3 ---------- arrow function -----------
// const chai = () => {
//   let username = "saunak";
//   console.log(this);
// };

// chai();

const two = (num1, num2) => num1 + num2;
console.log(two(10, 20));

const three = (num1, num2) => (num1 + num2) * 2;
console.log(three(10, 20));

const four = (num1, num2) => ({ username: "saunak" });
console.log(four(10, 20));

const five = (num1, num2) => num1 * num2 * 2;
{
  console.log(five(10, 20 + 30));
}
