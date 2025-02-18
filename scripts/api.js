const API_URL = "https://witzapi.de/api/joke";

export async function jokeAPI() {
  let response = await fetch(API_URL);
  let result = await response.json();
  return result[0].text;
}
