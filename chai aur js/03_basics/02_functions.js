function calculatecartprice(val1, val2, ...num1) {
  return num1;
}

console.log(calculatecartprice(200, 100, 1000, 500));

const user = {
  username: "saunak",
  price: 1000,
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleobject(user);
handleobject({ username: "saunak", price: 1000 });

const myarray = [1, 2, 3, 4, 5];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myarray));
console.log(returnSecondValue([1, 20, 3, 4, 5]));
