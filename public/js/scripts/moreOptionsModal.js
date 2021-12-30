import { quoteSection } from "../main.js";
import { getQuoteById } from "./getQuoteById.js";
import {
  showSendQuoteModal,
  emailInputField,
  hideSendQuoteModal,
} from "./modals/sendQuoteModal.js";
import {
  showUpdateQuoteModal,
  hideUpdateQuoteModal,
  updateAuthorInputField,
  updateQuoteInputField,
} from "./modals/updateQuoteModal.js";
import {
  showDeleteQuoteModal,
  hideDeleteQuoteModal,
} from "./modals/deleteQuoteModal.js";

export const backgrounModal = document.querySelector(".background-modal");
const moreOptionsModal = document.querySelector("#more-options-modal");
export const modalBody = document.querySelector("#modal-body");
const modalQuote = document.querySelector(".modal-quote");
const modalAuthor = document.querySelector(".modal-author");
export const closeModalBtn = document.querySelector("#close-modal-btn");
const deleteQuoteModalBtn = document.querySelector("#modal-delete-quote-btn");
const updateQuoteModalBtn = document.querySelector("#modal-update-quote-btn");
const sendQuoteModalBtn = document.querySelector("#modal-send-quote-btn");

export async function showModal() {
  let quoteId = quoteSection.dataset.id;
  const currentQuote = await getQuoteById(quoteId);
  modalQuote.innerText = `"${currentQuote[0].quote}"`;
  modalAuthor.innerText = `-${currentQuote[0].author}`;
  closeModalBtn.addEventListener("click", closeModal);
  backgrounModal.addEventListener("click", closeModal);
  moreOptionsModal.addEventListener("click", modalClick);
  deleteQuoteModalBtn.addEventListener("click", showDeleteQuoteModal);
  updateQuoteModalBtn.addEventListener("click", showUpdateQuoteModal);
  sendQuoteModalBtn.addEventListener("click", showSendQuoteModal);
  backgrounModal.classList.remove("hidden");
  moreOptionsModal.classList.remove("hidden");
  modalBody.classList.remove("hidden");
}

export function closeModal() {
  backgrounModal.classList.add("hidden");
  moreOptionsModal.classList.add("hidden");
  modalBody.classList.add("hidden");
  hideDeleteQuoteModal();
  hideUpdateQuoteModal();
  hideSendQuoteModal();
  resetInputFields();
}

function modalClick(event) {
  event.stopPropagation();
}

function resetInputFields() {
  emailInputField.value = "";
  updateQuoteInputField.value = "";
  updateAuthorInputField.value = "";
}
