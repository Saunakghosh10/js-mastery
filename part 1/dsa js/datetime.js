// Date
// const currentdate = new Date();
// console.log(currentdate);

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const year = date.getFullYear();
const hours = date.getHours();
const mins = date.getMinutes();
const secs = date.getSeconds();

console.log(`Year : ${year}`);
console.log(`Month : ${month}`);
console.log(`Day : ${day}`);
console.log(`Hour : ${hours}`);
console.log(`Min : ${mins}`);
console.log(`Sec : ${secs}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
