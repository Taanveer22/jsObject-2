let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
console.log(student);

// system 01
let count = 0;
for (let item in student) {
  console.log(item);
  if (student.hasOwnProperty(item)) {
    count++;
  }
}
console.log(count);

// system 02
const keysArray = Object.keys(student);
console.log(keysArray);
const keysArrayLength = keysArray.length;
console.log(keysArrayLength);
