const nums = [1, 2, 3];
newnums = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(newnums);

const mynums = [1, 2, 3, 4, 5, 6];
const newnums1 = mynums.reduce((acc, curr) => {
  return acc + curr;
}, 1);
console.log(newnums1);

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
console.log(newshoppingcard);
