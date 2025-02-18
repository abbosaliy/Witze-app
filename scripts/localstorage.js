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
