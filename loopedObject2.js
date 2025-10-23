const mobile = {
  brand: "xiaomi",
  year: 2019,
  hasTouch: true,
  apps: ["store", "map", "gmail"],
};
console.log(mobile);

// loop before coming for---in loop via array
const allKeys = Object.keys(mobile);
console.log(allKeys);

for (let element of allKeys) {
  console.log(element);
  console.log(mobile[element]);
  console.log(element, ":", mobile[element]);
}
