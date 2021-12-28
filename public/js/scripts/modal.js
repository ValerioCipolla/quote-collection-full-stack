import { quoteSection } from "../main.js";
import { getQuoteById } from "./getQuoteById.js";
const backgrounModal = document.querySelector(".background-modal");
const modalQuote = document.querySelector(".modal-quote");
const modalAuthor = document.querySelector(".modal-author");

export async function showModal() {
  backgrounModal.classList.remove("hidden");
  let quoteId = quoteSection.dataset.id;
  const currentQuote = await getQuoteById(quoteId);
  console.log(currentQuote);
}
