var randomColor = () => "#"+Math.floor(Math.random()*16777215).toString(16);
let first = document.getElementsByClassName("first")[0];
let second = document.getElementsByClassName("second")[0];

first.addEventListener("click", function(){
    first.style.backgroundColor = randomColor();
});

second.addEventListener("mousemove", function(){
    second.style.backgroundColor = randomColor();
});
