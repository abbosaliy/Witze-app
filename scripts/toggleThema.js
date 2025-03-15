const themaToggleClass = document.querySelector(".joke-app");
const currentJokeDiv = document.querySelector(".current-joke");
const body = document.querySelector("body");
const themaToggleBtn = document.querySelector(".joke-toggle");
const sunSvg = document.querySelector(".sun");
const moonSvg = document.querySelector(".moon");
const loadBtn = document.querySelector(".current-joke__load");
const saveBtn = document.querySelector(".current-joke__save ");
const titleEl = document.querySelector(".joke-app__title");


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
  body.classList.remove("bodyLightColor");
  loadBtn.classList.remove("currentBtnLight");
  loadBtn.classList.add("btnDark");
  saveBtn.classList.remove("currentBtnLight");
  saveBtn.classList.add("btnDark");
  titleEl.classList.add("titleDark");
 
 
}


export function apllyLightThema() {
  moonSvg.classList.add("toggleBtn");
  themaToggleBtn.classList.add("btn-light");
  themaToggleBtn.classList.remove("btn-dark");
  sunSvg.classList.remove("toggleBtn");
  currentJokeDiv.classList.remove("background-box");
  body.classList.add("bodyLightColor");
  body.classList.remove("background-body");
  loadBtn.classList.add("currentBtnLight");
  loadBtn.classList.remove("btnDark");
  saveBtn.classList.add("currentBtnLight");
  saveBtn.classList.remove("btnDark");
  titleEl.classList.remove("titleDark");
 
  
}
