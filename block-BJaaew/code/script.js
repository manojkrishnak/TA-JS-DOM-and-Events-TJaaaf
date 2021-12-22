function getChars(got) {
  let allChars = [];
  for (let i = 0; i < got.houses.length; i++) {
    for (let j = 0; j < got.houses[i].people.length; j++) {
      allChars.push(got.houses[i].people[j]);
    }
  }
  return allChars;
}


function createGotUI(got, flag) {
  let allPeople = document.querySelectorAll(".all-people")[0];
  if (flag) {
    allPeople.innerHTML = "";
  }
  for (let i = 0; i < got.houses.length; i++) {
    for (let j = 0; j < got.houses[i].people.length; j++) {
      let imgDiv = document.createElement("div");
      imgDiv.className = "person-image";

      let img = document.createElement("img");
      img.src = got.houses[i].people[j].image;
      img.alt = got.houses[i].people[j].name;

      imgDiv.append(img);
      let h2 = document.createElement("h2");
      h2.innerText = got.houses[i].people[j].name;
      h2.className = "name";

      let divOne = document.createElement("div");
      divOne.append(imgDiv, h2);
      divOne.className = "row-one flex justify-st align-ct";

      let p = document.createElement("p");
      p.innerText = got.houses[i].people[j].description;
      p.className = "description";

      let a = document.createElement("a");
      a.href = got.houses[i].people[j].wikiLink;
      a.innerText = "Learn More!";
      a.className = "learn-more-btn";
      a.setAttribute("target", "_blank");
      let div = document.createElement("div");
      div.append(divOne, p, a);
      div.className = "people-card flex flex-31 flex-dir-col relative";
      allPeople.classList.add("flex", "flex-wrap", "justify-sb");

      allPeople.append(div);
    }
  }
}

createGotUI(got, false);

// Filter by house name
for (let i = 0; i < got.houses.length; i++) {
  let button = document.createElement("button");
  button.innerText = got.houses[i].name;
  button.classList.add("houses-btn");
  button.setAttribute("data-id", i);
  let tags = document.querySelector(".tags");
  tags.append(button);
  button.addEventListener("click", function (e) {
    let allPeople = document.getElementsByClassName("all-people")[0];
    allPeople.innerHTML = "";
    let activeTag = document.querySelectorAll(".active");
    if (activeTag.length > 0) {
      activeTag.forEach(function (elm) {
        if (e.target.innerText !== elm.innerText) {
          elm.classList.remove("active");
        }
      });
    }
    button.classList.add("active");
    let reducedArray = got.houses.filter((cv) => {
      if (e.target.innerText === cv.name) {
        return cv;
      }
    });
    console.log(reducedArray);
    createGotUI({ houses: reducedArray }, true);
  });
}

// Search by Name
let input = document.querySelector(".search-bar");
input.addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    createGotUI(got, false);
  } else {
    let input = e.target.value;
    var re = new RegExp(input + ".+$", "i");
    let chars = getChars(got);
    chars = chars.filter(function (e) {
      return e.name.search(re) != -1;
    });
    createGotUI({ houses: [{ people: chars }] }, true);
  }
});

// Approach - instructor

// let parent = document.querySelector("all-people");

// let allPeopleInstructor = got.houses.reduce((acc, cv) => {
//     acc = acc.concat(cv.people);
//     return acc;
// }, [])

// let cardsHtml = allPeopleInstructor.map(person => {
//     return `return li elemnt with a sample dynamic structure in it`;
// })

// parent.innerHTML = cardsHtml.join("");
