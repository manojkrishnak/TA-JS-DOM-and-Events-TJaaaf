let movieNames = [];

let elm = document.querySelector("form");
let movies = document.querySelector(".movies");

elm.addEventListener("submit", function (e) {
  e.preventDefault();
  movieNames.push(e.target.elements.movieName.value);
  movies.innerHTML = movieNames
    .map(
      (el, i) =>
        "<li class=li" +
        i +
        "><input type='checkbox'>" +
        el +
        " <i class='fas fa-times'></i></li>"
    )
    .join("");
  let textBox = document.querySelector(".watchMovie");
  textBox.value = "";
  let del = document.querySelectorAll(".fa-times");
  del.forEach(function (eachDel) {
    eachDel.addEventListener("click", function (e) {
      let index = movieNames.findIndex(function (el) {
        return el.trim() === e.target.parentElement.innerText.trim();
      });
      movieNames.splice(index, 1);
      movies.innerHTML = movieNames
        .map(
          (el, i) =>
            "<li class=li" +
            i +
            "><input type='checkbox'>" +
            el +
            " <i class='fas fa-times'></i></li>"
        )
        .join("");
    });
  });
});

movies.innerHTML =
  movieNames.length < 1
    ? "<li class='no-movies'>No movie to watch</li>"
    : false;
