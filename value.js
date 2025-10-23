const person = {
  name: "sodor uddin",
  age: 28,
  profession: "programmer",
  salary: 29000,
  "visited places": ["bandarban", "salban", "kataban"],
};
console.log(person);

// value update via dot and bracket notation
person.age = 32;
person["salary"] = 32000;
console.log(person);

person["visited places"] = ["dubai", "palestine", "doha"];
console.log(person);
