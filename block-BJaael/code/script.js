let randomNumber = () => Math.floor(Math.random() * 1000);
let boxes = document.getElementsByClassName("grid")[0];

for (let i = 0; i < 500; i++) {
  let li = document.createElement("li");
  li.innerText = randomNumber();
  li.setAttribute("class", "box");
  boxes.append(li);
}
function randomColor() {
  let color = "#";
  let random = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let randomNumber = () => Math.floor(Math.random() * 16);
  for (let i = 0; i < 5; i++) {
    color += random[randomNumber()];
  }
  return color.toString();
}

boxes.addEventListener("mousemove", function () {
  for (let i = 0; i < 500; i++) {
    let li = document.querySelectorAll("li");
    li[i].innerText = randomNumber();
    console.log( randomColor())
    li[i].style.backgroundColor = randomColor();
  }
});
