let { a, b, ...rest } = { a: 100, b: 200, rest: [400, 500] };
console.log(a);
console.log(rest);


const person = { 
    name : "saunak" , 
    age : 20 , 
    gender : "male" , 
    country : "india"
} ; 

const {name ,age , country} = person
console.log(name) 