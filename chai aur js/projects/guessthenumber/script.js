const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const submit = document.querySelector(".submit");
const guessField = document.querySelector(".guessField");

const p = document.createElement("p");

let prevguess = [];
let newguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  //
  if (isNaN(guess)) {
    alert("please enter a valid no");
  } else if (guess < 1) {
    alert("pls enter no more than 1");
  } else if (guess > 100) {
    alert("pls enter a no less than 100");
  } else {
    prevguess.push(guess);
    if (newguess === 11) {
      displayguess(guess);
      displaymessage(`game over! the no was ${randomNumber}`);
      endgame(guess);
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  //
  if (guess === randomNumber) {
    displaymessage(`congrats! you guessed it right`);
    endgame(guess);
  } else if (guess < randomNumber) {
    displaymessage(`too low! try again`);
  } else if (guess > randomNumber) {
    displaymessage(`too high! try again`);
  }
}
function displayguess(guess) {
  //
  userInput.value = "";
  guesses.innerHTML += `${guess} `;
  newguess++;
  remaining.innerHTML = `${11 - newguess} guesses left`;
}
function displaymessage(message) {
  //
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endgame() {
  //
  userInput.disabled = true;
  submit.disabled = true;
  resetbutton = document.createElement("button");
  resetbutton.textContent = "start new game";
  document.body.append(resetbutton);
  resetbutton.addEventListener("click", resetgame);
}
function newgame() {
  //
  userInput.disabled = false;
  submit.disabled = false;
  userInput.value = "";
  userInput.focus();
  guesses.innerHTML = "";
  lowOrHi.innerHTML = "";
  remaining.innerHTML = "";
  prevguess = [];
  newguess = 1;
  resetbutton.parentNode.removeChild(resetbutton);
}
