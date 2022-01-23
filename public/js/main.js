import switchMode from "./scripts/switchMode.js";
import { showModal } from "./scripts/moreOptionsModal.js";
import { showAddQuoteModal } from "./scripts/modals/addQuoteModal.js";

export const URL = "";
export const quoteSection = document.querySelector("#quote-section");
export const quote = document.querySelector("#quote");
export const author = document.querySelector("#author");
export const nextQuoteButton = document.querySelector("#next-quote-btn");
export const switchModeButton = document.querySelector("#switch-mode-btn");
export const moreOptionBtn = document.querySelector("#more-options-btn");
export const addQuoteBtn = document.querySelector("#add-quote-btn");
export const downloadPDFBtn = document.querySelector("#download-pdf-btn");

let index = 0;

// get next quote
export async function getQuote() {
  const response = await fetch(`${URL}/api/quotes/`);
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
  quoteSection.setAttribute("data-id", currentQuote.id);
  quote.innerText = `"${currentQuote.quote}"`;
  author.innerText = `- ${currentQuote.author}`;
}

async function nextQuoteButtonClickHandler() {
  index++;
  getQuote();
}

async function generatePDF() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quote: quote.innerText,
      author: author.innerText,
    }),
  };
  const response = await fetch(`${URL}/api/pdf`, requestOptions);
  const data = await response.json();
  openPDF(data.payload);
}

function openPDF(string) {
  window.open(string);
}

nextQuoteButton.addEventListener("click", nextQuoteButtonClickHandler);
addQuoteBtn.addEventListener("click", showAddQuoteModal);
switchModeButton.addEventListener("click", switchMode);
moreOptionBtn.addEventListener("click", showModal);
downloadPDFBtn.addEventListener("click", generatePDF);
getQuote();
