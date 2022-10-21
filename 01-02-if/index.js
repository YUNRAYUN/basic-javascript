const obj = {
  name: "Jason",
  age: 25,
};
if (obj.name === "Jason" && obj.age >= 25) {
  console.log("안녕, " + obj.name + ", 너의 나이는 " + obj.age);
}
if (obj.name === "Jason" || obj.name === "peter") {
  console.log("안녕, " + obj.name);
} else {
  console.log("넌 우리 멤버가 아니구나");
}
