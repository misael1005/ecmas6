const data = {
  frontend: "Maria",
  backend: "Augusto",
  design: "Jair",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
  frontend: "Maria",
  backend: "Augusto",
  design: "Jair"
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = "Apaka";
console.log(string.padStart(7, "O "));
console.log(string.padEnd(12, "maka mu"));
console.log("Aku ".padEnd(7, "Aku"));

