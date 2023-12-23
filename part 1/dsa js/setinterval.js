// //setinterval
// setInterval(() => console.log(`this func is executed every 2 second`));

// //settimeout
// setTimeout(function () {
//   console.log(`this function will be executed after 3 seconds`);
// }, 3000);

const set = setInterval(function () {
  console.log(`fn is being executed at the interval`);
}, 1000);

setTimeout(function () {
  clearInterval(set);
  console.log(`interval stopped`);
}, 10000);
