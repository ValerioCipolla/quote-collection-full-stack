const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const nextQuoteButton = document.querySelector("#next-quote-btn");
let index = 0;

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
  quote.innerText = currentQuote.quote;
  author.innerText = `-${currentQuote.author}`;
}

async function nextQuoteButtonClickHandler() {
  index++;
  getQuote();
}

nextQuoteButton.addEventListener("click", nextQuoteButtonClickHandler);

getQuote();
