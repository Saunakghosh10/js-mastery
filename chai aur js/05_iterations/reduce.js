const nums = [1, 2, 3];
newnums = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(newnums);

const mynums = [1, 2, 3, 4, 5, 6];
const newnums1 = mynums.reduce((acc, curr) => {
  return acc + curr;
}, 1);
// console.log(newnums1);

const shoppingcard = [
  {
    name: "Shoes",
    price: 200,
    quantity: 1,
  },
  {
    name: "Shirt",
    price: 100,
    quantity: 2,
  },
  {
    name: "Pants",
    price: 300,
    quantity: 1,
  },
  {
    name: "Socks",
    price: 50,
    quantity: 3,
  },
  {
    name: "Hat",
    price: 70,
    quantity: 1,
  },
];

const newshoppingcard = shoppingcard.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
// console.log(newshoppingcard);

const news = [
  {
    title: "The Hunger Games",
    genre: "history",
  },
  {
    title: "The Hobbit",
    genre: "fantasy",
  },
  {
    title: "The Lord of the Rings",
    genre: "fantasy",
  },
  {
    title: "The Lord of the Rings",
    genre: "fantasy",
  },
];

const newscard = news.reduce((acc, curr) => {
  return acc + curr.title;
});
console.log(newscard);

// sum printing from 1 - 100
function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sum(100));

//fibonacci
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

// let name1 = ["john", "doe", "smith"];
let names = [{ name: "john" }, { name: "doe" }, { name: "smith" }];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function sumall(startindex, endindex) {
  var sum = 0;
  for (let i = startindex; i <= endindex; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumall(1, 1000));

function sumdivide(startindex, endindex) {
  var sum = 1000;
  for (let i = startindex; i < endindex; i++) {
    sum = sum - i;
  }
  return sum;
}
console.log(sumdivide(1, 10000));

function star(n) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans = ans + "**";
  }
  console.log(ans);
}

function starlines(n) {
  for (let i = 0; i < n; i++) {
    star(i);
  }
}
let ans = starlines(5);
console.log(ans);
