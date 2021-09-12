// //before

// function myFunction (name, age, city) {
//     var name = "Pablo";
//     var age = "18";
//     var city = "CDMX";
//     console.log(name, age, city)
// }

// myFunction();

// //after

// function myNewFunction (name = "Pedro", age ="24", city = "Bogotá") {
//     console.log(name, age, city)
// };

// myNewFunction();

// //before

// var name = "Bugs";
// var lastName = "Bunny";
// var cartoonName = name + " " + lastName;
// console.log(cartoonName);

// //after

// let nombre = "Bugs";
// let apellido = "Bunny";
// let fullName = `${nombre} ${apellido}`;
// console.log(fullName);

//before

let jump = "Primera linea mamalona\nSegunda linea mamalona";
console.log(jump);

//after

let newJump = `Primera linea mamalonsisima
Segunda linea mamalonsisima`;
console.log(newJump);

//before

let person = {
    'age' : 21,
    'name' : 'Jose',
    'city' : 'CDMX'
};

console.log(person.name, person.age);

//after

let {age, name} = person;
console.log(age, name);