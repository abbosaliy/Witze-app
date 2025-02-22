const LOCAL_STRORAGE_KEY = "joke";

export function saveToLocalStorage(joke) {
  const savedJokes = getSavedJokes();

  if (!savedJokes.includes(joke)) {
    savedJokes.push(joke);
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(savedJokes));
  } else {
    alert("Witze schon gespaichert!");
  }
}

export function getSavedJokes() {
  return JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY)) || [];
}

export function removeJokes(index) {
  const savedJokes = getSavedJokes();

  savedJokes.splice(index, 1);

  localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(savedJokes));
}

const themaToggleBtn = document.querySelector(".joke-toggle");
const themaToggleClass = document.querySelector(".joke-app");
const currentJokeDiv = document.querySelector(".current-joke");
const body = document.querySelector("body");

const sunSvg = document.querySelector(".sun");
const moonSvg = document.querySelector(".moon");
const saveThema = localStorage.getItem("thema");

if (saveThema === "dark") {
  applyDarkThema();
} else {
  apllyLightThema();
}

function toggleThema() {
  themaToggleClass.classList.toggle("thema-toggle");
  if (themaToggleClass.classList.contains("thema-toggle")) {
    apllyLightThema();
    localStorage.setItem("thema", "light");
  } else {
    applyDarkThema();
    localStorage.setItem("thema", "dark");
  }
}

function applyDarkThema() {
  sunSvg.classList.add("toggleBtn");
  body.classList.add("background-body");
  currentJokeDiv.classList.add("background-box");
  themaToggleBtn.classList.add("btn-dark");
  themaToggleBtn.classList.remove("btn-light");
  moonSvg.classList.remove("toggleBtn");
}

function apllyLightThema() {
  moonSvg.classList.add("toggleBtn");
  themaToggleBtn.classList.add("btn-light");
  themaToggleBtn.classList.remove("btn-dark");
  sunSvg.classList.remove("toggleBtn");
  currentJokeDiv.classList.remove("background-box");
  body.classList.remove("background-body");
}
themaToggleBtn.addEventListener("click", toggleThema);
