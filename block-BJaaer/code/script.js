let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let userInfo = {};


form.addEventListener("submit", function(e){
    e.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email[0].value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.email[1].value;
    userInfo.rating = form.elements.email[2].value;
    userInfo.genre = form.elements.drone.value;
    userInfo.agreeTerms = form.elements.terms.checked;

    modal.style.display= "inline-block";

    let name = document.querySelector(".name");
    name.innerText = userInfo.name;

    let email = document.querySelector(".email");
    email.innerText = userInfo.email;

    let movie = document.querySelector(".movie");
    movie.innerText = userInfo.gender;

    let color = document.querySelector(".color");
    color.innerText = userInfo.color;

    let rating = document.querySelector(".rating");
    rating.innerText = userInfo.rating;

    let genre = document.querySelector(".genre");
    genre.innerText = userInfo.genre;

    form.style.display = "none";

});


let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    modal.style.display = "none";
    form.style.display = "flex";

})

console.log(userInfo)