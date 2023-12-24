function countto5(count) {
  if (count === true) {
    for (let i = 1; i < 5; i++) {
      console.log(`count : ${i}`);
    }
  }
}

countto5(true);

function ratings(rate) {
  if (rate === 5) {
    console.log("high ratings");
  } else if (rate === 0) {
    console.log("low ratings");
  }
}

ratings(5);

// challenge---------
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
