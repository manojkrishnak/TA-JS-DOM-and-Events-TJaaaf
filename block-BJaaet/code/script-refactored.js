let input = document.querySelector("input[type='text']");
let rootElm = document.querySelector(".movies");
let allMovies = [
  {
    movieName: "Speed",
    watched: false,
  },
  {
    movieName: "Jurrasic Park",
    watched: true,
  },
];

function toggleWatched(e) {
  let id = e.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function deleteMovie(e) {
  let id = e.target.dataset.id;
  allMovies.splice(id, 1);
  createMoviesUI();
}

function createMoviesUI() {
  rootElm.innerHTML = "";
  allMovies.forEach(function (movie, i) {
    let li = document.createElement("li");
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = movie.watched;
    input.classList.add("movie-watched");
    input.id = i;

    let label = document.createElement("label");
    label.innerText = movie.movieName;
    label.for = i;

    let span = document.createElement("span");
    span.classList.add("cross");
    span.innerHTML = "X";
    span.setAttribute("data-id", i);

    li.append(input, label, span);
    rootElm.append(li);

    let crossBtn = document.querySelectorAll("span");
    crossBtn[i].addEventListener("click", deleteMovie);

    let checkbox = document.querySelectorAll("input[type='checkbox']");
    checkbox[i].addEventListener("change", toggleWatched);
  });
}

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    allMovies.push({
      movieName: e.target.value,
      watched: false,
    });
    createMoviesUI();
    e.target.value = "";
  }
});

createMoviesUI();
