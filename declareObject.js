// =================literal syntax=================
const pen = {
  brand: "econo",
  price: 5,
};
console.log(pen);

// =============new keyword syntax================
const person = new Object({
  firstName: "john",
  lastName: "doe",
});
console.log(person);

// ================Object.create() method=================
const player = {
  name: "mash",
  role: "bowling",
};
const man = Object.create(player);
console.log(man.name);
console.log(man.role);

// ==============Object.fromEntries() method================
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];
const fruitsObj = Object.fromEntries(fruits);
console.log(fruitsObj);

// ================Object.assign() method=================

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person1);

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source To Target
Object.assign(person1, person2);

// Display Target
console.log(Object.entries(person1));
