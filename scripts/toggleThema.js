const themaToggleClass = document.querySelector(".joke-app");
const currentJokeDiv = document.querySelector(".current-joke");
const body = document.querySelector("body");
const themaToggleBtn = document.querySelector(".joke-toggle");
const sunSvg = document.querySelector(".sun");
const moonSvg = document.querySelector(".moon");



const saveThema = localStorage.getItem("thema");

if (saveThema === "dark") {
  applyDarkThema();
} else {
  apllyLightThema();
}

export function toggleThema() {
  themaToggleClass.classList.toggle("thema-toggle");
  if (themaToggleClass.classList.contains("thema-toggle")) {
    apllyLightThema();
    localStorage.setItem("thema", "light");
  } else {
    applyDarkThema();
    localStorage.setItem("thema", "dark");
  }
}

export function applyDarkThema() {
  sunSvg.classList.add("toggleBtn");
  body.classList.add("background-body");
  currentJokeDiv.classList.add("background-box");
  themaToggleBtn.classList.add("btn-dark");
  themaToggleBtn.classList.remove("btn-light");
  moonSvg.classList.remove("toggleBtn");
}

export function apllyLightThema() {
  moonSvg.classList.add("toggleBtn");
  themaToggleBtn.classList.add("btn-light");
  themaToggleBtn.classList.remove("btn-dark");
  sunSvg.classList.remove("toggleBtn");
  currentJokeDiv.classList.remove("background-box");
  body.classList.remove("background-body");
}
