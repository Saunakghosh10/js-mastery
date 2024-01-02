// const ob = new Object();
// console.log(ob);

// ob.id = "123";
// ob.name = "saunak";
// console.log(ob);

// const reguser = {
//   id: "123",
//   name: {
//     first: "saunak",
//     last: "kumar",
//     usrfullname: function () {
//       return this.first + " " + this.last;
//     },
//   },

//   age: 21,
//   login: false,
//   blogs: ["hello", "world", "saunak"],
//   // login : function(){
//   //     console.log("user logged in");
//   // },
// };
// console.log(reguser);

// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "a", 5: "b", 6: "c" };
// const obj3 = { 7: "a", 8: "b", 9: "c" };

// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// const users = [
//   {
//     id: 1,
//     email: "<EMAIL>",
//     password: "<PASSWORD>",
//   },
//   {
//     id: 2,
//     email: "<EMAIL>",
//     password: "<PASSWORD>",
//   },
//   {
//     id: 3,
//     email: "<EMAIL>",
//     password: "<PASSWORD>",
//   },
// ];

// users[1].email;
// console.log(users);

// destructuring ---

const course = {
  courseName: "JavaScript",
  courseCode: "JS101",
  price: "1000",
};

const { courseName, courseCode, price, instructor } = course;
console.log(courseName);
console.log(courseCode);
console.log(price);

[
    {} , 
    {} , 
    {} ,
]
