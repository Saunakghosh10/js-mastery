// if

// const isUserloggedIn = false;
// if (isUserloggedIn) {
//   console.log("Welcome User");
// } else {
//   console.log("Please Login");
// }

let temperature;
if (temperature === 50) {
  console.log("It's too hot");
} else {
  console.log("its cold");
}
const score = 90;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// const balance = 1000;
// // if (balance > 500) console.log("You have a good balance");
// // else console.log("You have a low balance");

// if (balance < 500) {
//   console.log("You have a low balance");
// } else if (balance < 750) {
//   console.log("good");
// } else if (balance < 1200) {
//   console.log("bad");
// }

const isUserloggedIn = true;
const debitCard = true;
const creditCard = true;
const loggedinfromgoogle = true;
const loggedinfromemail = true;

if (isUserloggedIn && debitCard) {
  console.log("allow to buy courses");
} else {
  console.log("dont allow");
}

const loggedin = true;
if (loggedinfromemail || loggedinfromgoogle) {
  console.log("user logged in");
}

