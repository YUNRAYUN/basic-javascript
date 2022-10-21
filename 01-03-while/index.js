for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
//0
//1
//2
//3
// 4
//5
//6
//7
//8
//9

let i = 0;

while (i < 10) {
  console.log(i);
  i = i + 1;
}
//0
//1
//2
//3
// 4
//5
//6
//7
//8
//9
//10

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      counterMaker();
    }, 1000 * i);
  }
};
