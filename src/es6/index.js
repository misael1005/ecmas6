//before

function myFunction(name, age, city) {
  var name = "Pablo";
  var age = "18";
  var city = "CDMX";
  console.log(name, age, city);
}

myFunction();

//after

function myNewFunction(name = "Pedro", age = "24", city = "Bogotá") {
  console.log(name, age, city);
}

myNewFunction();

//before

var name = "Bugs";
var lastName = "Bunny";
var cartoonName = name + " " + lastName;
console.log(cartoonName);

//after

let nombre = "Bugs";
let apellido = "Bunny";
let fullName = `${nombre} ${apellido}`;
console.log(fullName);

//before

let jump = "Primera linea mamalona\nSegunda linea mamalona";
console.log(jump);

//after

let newJump = `Primera linea mamalonsisima
Segunda linea mamalonsisima`;
console.log(newJump);

//before

let person = {
  age: 21,
  llamas: "Jose",
  city: "CDMX",
};

console.log(person.llamas, person.age);

//after

let { age, llamas } = person;
console.log(age, llamas);

//after

let team1 = ["Jorge", "José", "Jesús"];
let team2 = ["Maria", "Mariana", "Mariela"];
let dreamTeam = ["Pablo", ...team1, ...team2];

console.log(dreamTeam);

//before

var variable = "Var es global, local y se puede cambiar";
let variablLet = "Let es local, no es global y se puede cambiar";
const variableConst = "Const es global, local y no se puede cambiar";

console.log(`${variable}
${variablLet}
${variableConst}`);

//before

let alias = "Jesús";
let edad = 27;

let person3 = { name: alias, age: edad };
console.log(person);

//after

let person2 = { alias, edad };
console.log(person2);

//before

let array = [
  { name, age },
  { name, age },
];

let listOfNames = array.map(function (item) {
  console.log(item.name);
});

//after

let listOfNames2 = array.map((item) => console.log(item.name));
const listOfNames3 = (name) => {
  console.log(array.name);
};

//Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ouch!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
  res(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA - this.valueB;
  }
}

const calc = new calculator();
console.log(calc.res(10, 4));

// Módulos

// import ashahuasca from "./module";

// ashahuasca();

// import { hello } from "./module";
// import { hello, bye } from "./module";
// import { hello as holis, bye } from "./module";
// import * as epifania from "./module";

const holfas = require("./module");
console.log(holfas());

// Generadores

function* helloWorld() {
  if (true) {
    yield "Holas";
  }
  if (true) {
    yield "Aguas";
  }
}

const holis = helloWorld();

console.log(holis.next().value);
console.log(holis.next().value);