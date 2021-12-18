let movieNames = [];

let elm = document.querySelector("form");
let movies = document.querySelector(".movies");

elm.addEventListener("submit", function (e) {
  e.preventDefault();
  movieNames.push(e.target.elements.movieName.value);
  movies.innerHTML = movieNames
    .map(
      (el, i) =>
        "<li class=li"+i+"><input type='checkbox'>" +
        el +
        " <i class='fas fa-times'></i></li>"
    )
    .join("");
    let textBox = document.querySelector(".watchMovie");
    textBox.value = "";
  let del = document.querySelectorAll(".fa-times");
  del.forEach(function (eachDel) {
    eachDel.addEventListener("click", function (e) {
        console.log(e)
    //   console.log(e.target.parentElement.innerText);
   let index = movieNames.findIndex(function (el){ console.log( el.toString() == e.target.parentElement.innerText.toString())
    return el === e.target.parentElement.innerText})
   console.log(index)
    //   movieNames.splice(movieNames.indexOf(e.target.parentElement.innerText), 1);
    //   console.log(movieNames)

    });
  });
});

movies.innerHTML =
  movieNames.length < 1
    ? "<li class='no-movies'>No movies to watch</li>"
    : false;
