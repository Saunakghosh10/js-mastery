// weight - guide;
// resultss;
// button
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  const bmi = weight / ((height * height) / 10000);
  const results = document.querySelector("#results");
  results.textContent = bmi;

  const guide = document.querySelector("#weight-guide");
  if (bmi < 18.5) {
    guide.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    guide.textContent = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    guide.textContent = "Overweight";
  } else if (bmi >= 30) {
    guide.textContent = "Obese";
  }
});
