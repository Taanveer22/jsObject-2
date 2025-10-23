const person = {
  name: "sodor uddin",
  age: 28,
  profession: "programmer",
  salary: 29000,
  "visited places": ["bandarban", "salban", "kataban"],
};

// property access via dot notation
console.log(person.name);
console.log(person.age);

// property access via bracket notation
console.log(person["profession"]);
console.log(person["salary"]);

// only acess via bracket notation
console.log(person["visited places"]);

// property access via declaring variable
let boyos = person.age;
console.log(boyos);
let pesha = "profession";
console.log(person[pesha]);
