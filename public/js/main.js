const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const nextQuoteButton = document.querySelector("#next-quote-btn");
const switchModeButton = document.querySelector("#switch-mode-btn");
let darkMode = false;
let index = 0;

// switch between dark and light mode
function switchMode() {
  if (!darkMode) {
    document.documentElement.style.setProperty("--background-color", "#121212");
    document.documentElement.style.setProperty("--quote-color", "#FFFFFF");
    document.documentElement.style.setProperty("--author-color", "#d3d3d3");
    document.documentElement.style.setProperty("--inactive-button", "#dcdcdc");
    document.documentElement.style.setProperty("--active-button", "#FF5733");
    darkMode = true;
  } else {
    document.documentElement.style.setProperty("--background-color", "#ffffff");
    document.documentElement.style.setProperty("--quote-color", "#000000");
    document.documentElement.style.setProperty("--author-color", "#101010");
    document.documentElement.style.setProperty("--inactive-button", "#303030");
    document.documentElement.style.setProperty("--active-button", "#4f345a");
    darkMode = false;
  }
}

// get next quote
async function getQuote() {
  const response = await fetch("http://localhost:3000/api/quotes/");
  const data = await response.json();
  const arrayOfQuotes = await data.payload;
  // current quote will be the one at that index position (index starts at 0)
  let currentQuote = arrayOfQuotes[index];
  // if index is higher than the length of the array, index resets to 0
  if (!currentQuote) {
    index = 0;
    currentQuote = arrayOfQuotes[index];
  }
  // assign current quotes to html elements
  quote.innerText = `"${currentQuote.quote}"`;
  author.innerText = `- ${currentQuote.author}`;
}

async function nextQuoteButtonClickHandler() {
  index++;
  getQuote();
}

nextQuoteButton.addEventListener("click", nextQuoteButtonClickHandler);
switchModeButton.addEventListener("click", switchMode);

getQuote();
