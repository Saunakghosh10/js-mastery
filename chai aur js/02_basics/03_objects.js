//singleton

// Object.create(null)
const jsuser = {
  name: "saunak",
  age: 21,
  login: false,
  blogs: ["hello", "world", "saunak"],
  // login : function(){
  //     console.log("user logged in");
  // },
};
// console.log(jsuser);
// console.log(jsuser.name);
// console.log(jsuser.age);
// console.log(jsuser.login);
// console.log(jsuser.blogs);
// jsuser.login();

// function

jsuser.login = function () {
  console.log("user logged in");
};
jsuser.login();
