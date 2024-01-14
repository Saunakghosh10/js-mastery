const promiseone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise one resolved");
  }, 2000);
});

promiseone.then(function (data) {
  console.log(data);
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise two resolved");
  }, 2000);
}).then(function (data) {
  console.log(data);
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "saunak", age: 20 });
  }, 2000);
});

promisethree.then(function (data) {
  console.log(data);
});

const promisefour = new Promise(function (resolve, reject) {
  //reject
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "saunak", age: 20 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});
promisefour
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
