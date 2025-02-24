import "./styles/main.scss";
import { jokeAPI } from "./scripts/api";
import {
  getSavedJokes,
  removeJokes,
  saveToLocalStorage,
} from "./scripts/localstorage";
import { toggleThema } from "./scripts/toggleThema";

const currentJokeBtn = document.querySelector(".current-joke__load");
const currentJoketext = document.querySelector(".current-joke__text");
const saveJokeBtn = document.querySelector(".current-joke__save");
const savedJokeEl = document.querySelector(".saved-jokes__el");
const themaToggleBtn = document.querySelector(".joke-toggle");

themaToggleBtn.addEventListener("click", toggleThema);
currentJokeBtn.addEventListener("click", newJokeLoad);
saveJokeBtn.addEventListener("click", currendSavedJoke);

let currentJoke = "";

async function newJokeLoad() {
  const joke = await jokeAPI();

  if (!currentJoke) {
    saveJokeBtn.classList.remove("current-joke__save--hidden");
  }

  currentJoke = joke;
  currentJoketext.innerText = joke;
}

function currendSavedJoke() {
  if (!currentJoke) return;
  saveToLocalStorage(currentJoke);
  displaySavedJoke();
}

function removeSavedJokes(index) {
  removeJokes(index);
  displaySavedJoke();
}

window.removeSavedJokes = removeSavedJokes;

function displaySavedJoke() {
  const savedJokes = getSavedJokes();

  savedJokeEl.innerHTML = "";

  let html = "";

  savedJokes.forEach((joke, index) => {
    html += `
    
  <div class="saved-jokes__liste">
    <div class="saved-jokes__text">
      ${joke}
    </div>
    <button class="saved-jokes__remove" onclick="removeSavedJokes(${index})" >
      <svg
        class="saved-jokes__remove-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"         
        >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5
        21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507
        0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
        />
      </svg>
    </button>
  </div>

    `;
  });

  if (!html) html = "<em>Keine witze gespaichert!</em>";
  savedJokeEl.innerHTML = html;
}

displaySavedJoke();
