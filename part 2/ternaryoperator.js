let password = 2;
function passcheck(ps) {
  //   if (ps === 8) {
  //     return "strong pass";
  //   } else {
  //     return "pass should be 8 characters";
  //   }

  return ps === 8 ? `strong pass` : "pass should be 8 characters";
}
const res = passcheck(password);
console.log(res);

// challenge-----
const age = 20;
const isadult = age >= 18 ? "adult" : "not adult";
console.log(isadult);

const person = false;
const havemoney = person === true ? "buy products" : "they should bring money ";
console.log(havemoney);

const sg = true;
const lovingher = sg === true ? "true love " : "false love";
console.log(lovingher);
