const coding = ["js", "ruby", "python", "java", "c++", "c#", "php"];

const values = coding.forEach((value) => {
  console.log(value);
});

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnums = mynums.filter((mynums) => {
//   return mynums > 5;
// });
// const newnums2 = mynums.map((mynums) => {
//   return mynums * 2;
// });

// console.log(newnums);

const books = [
  {
    title: "The Hunger Games",
    genre: "history",
    author: "<NAME>",
    publisher: "Marvel Comics",
  },
  {
    title: "The Hobbit",
    genre: "fantasy",
    author: "<NAME>",
    publisher: "Marvel Comics",
  },
  {
    title: "The Lord of the Rings",
    genre: "fantasy",
    author: "<NAME>",
    publisher: "Marvel Comics",
  },
  {
    title: "The Lord of the Rings",
    genre: "fantasy",
    author: "<NAME>",
    publisher: "Marvel Comics",
  },
];
const newbooks = books.filter((book) => {
  return book.genre === "fantasy";
});
console.log(newbooks);

const publisher = books.filter((book) => {
  return book.publisher === "Marvel Comics";
});
console.log(publisher);
