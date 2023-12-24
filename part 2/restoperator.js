function user(...data) {
  console.log(data);
}

user("saunak", 21, "prog", "football");

function person(firstname, lastname, ...hobbies) {
  console.log("first name : ", firstname);
  console.log("last name : ", lastname);
  console.log("hobbies : ", ...hobbies);
}

person("saunak", "ghosh", "programming", "football", "volleybal");

// -----challenge
function name2(first, second, ...third) {
  console.log("first :", first);
  console.log("second :", second);
  console.log("third :", ...third);
}

name2("saunak", "horsu", "nothing", "boring", "hehe");
