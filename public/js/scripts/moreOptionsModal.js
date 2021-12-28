import { quoteSection } from "../main.js";
import { getQuoteById } from "./getQuoteById.js";
const backgrounModal = document.querySelector(".background-modal");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector("#modal-body");
const modalQuote = document.querySelector(".modal-quote");
const modalAuthor = document.querySelector(".modal-author");
const closeModalBtn = document.querySelector("#close-modal-btn");
const deleteQuoteModalBtn = document.querySelector("#modal-delete-quote-btn");
const updateQuoteModalBtn = document.querySelector("#modal-update-quote-btn");
const sendQuoteModalBtn = document.querySelector("#modal-send-quote-btn");
const modalActionSendBody = document.querySelector("#modal-action-send-body");
const sendActionBtn = document.querySelector("#send-email-action");
const modalCompletedActionSendBody = document.querySelector(
  "#modal-completed-action-send"
);
const closeModalCompletedActionSendBtn = document.querySelector(
  "#close-modal-completed-action-send"
);

export async function showModal() {
  backgrounModal.classList.remove("hidden");
  let quoteId = quoteSection.dataset.id;
  const currentQuote = await getQuoteById(quoteId);
  modalQuote.innerText = `"${currentQuote[0].quote}"`;
  modalAuthor.innerText = `-${currentQuote[0].author}`;
  closeModalBtn.addEventListener("click", closeModal);
  backgrounModal.addEventListener("click", closeModal);
  modal.addEventListener("click", modalClick);
  sendQuoteModalBtn.addEventListener("click", showSendQuoteModal);
}

export function closeModal() {
  backgrounModal.classList.add("hidden");
  modalBody.classList.remove("hidden");
  modalActionSendBody.classList.add("hidden");
  modalCompletedActionSendBody.classList.add("hidden");
}

function modalClick(event) {
  event.stopPropagation();
}

function showSendQuoteModal() {
  modalBody.classList.add("hidden");
  modalActionSendBody.classList.remove("hidden");
  sendActionBtn.addEventListener("click", sendEmail);
}

function sendEmail() {
  modalActionSendBody.classList.add("hidden");
  modalCompletedActionSendBody.classList.remove("hidden");
  closeModalCompletedActionSendBtn.addEventListener("click", closeModal);
}
