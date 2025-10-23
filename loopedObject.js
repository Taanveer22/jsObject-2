const mobile = {
  brand: "xiaomi",
  year: 2019,
  hasTouch: true,
  apps: ["store", "map", "gmail"],
};
console.log(mobile);

for (let prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
  console.log(prop, ":", mobile[prop]);
}
