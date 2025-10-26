const person = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

console.log(person);

for (let item in person) {
  console.log(item);
  console.log(typeof item);
  console.log(person[item]);
  console.log(typeof person[item]);
  console.log(`key : ${item} | type : ${typeof person[item]}`);
}
