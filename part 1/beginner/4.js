// strings

let fname = "saunak";
let sname = "ghosh";

let fullname = fname + " " + sname;
console.log(fullname);

// concat
let full2name = fname.concat(sname);
console.log(full2name);

// append
// fname += " is a good boy"
console.log(fname);

// length
console.log(fname.length);

// cases
console.log(fname);
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

// slice
console.log(fname.slice(0, 5));
console.log(sname.slice(0, 3));

// split and join
console.log(fname.split(""));
console.log(sname.split(""));

// includes
console.log(fname.includes("X"));

//trim
console.log(fname.trim());

//backtick
let f1name = "saunak";
let f2name = "ghosh";
let f3name = `${f1name} ${f2name} good`;
console.log(f3name);
