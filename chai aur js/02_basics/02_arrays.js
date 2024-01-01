const marvel = ["Iron Man", "Spider Man", "Captain America", "Thor"];
const dc = ["Batman", "Superman", "Wonder Woman", "Flash"];

// 1. Add "Hulk" to the end of the marvel array
// marvel.push("Hulk");
// console.log(marvel);
// marvel.concat(dc);

// console.log(marvel.concat(dc));

// spread operator [...]
// console.log([...marvel, ...dc]);
console.log([...marvel, "Hulk", ...dc]);

const array = [1, 2, 3, [4, 5, 6], 7, [10, [4, 9, 3], 46, 5], 8, 9];

console.log(array.flat(2));

