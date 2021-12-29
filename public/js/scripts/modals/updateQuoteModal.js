import { modalBody } from "../moreOptionsModal.js";

const modalActionUpdateBody = document.querySelector(
  "#modal-action-update-body"
);
const updateQuoteInputField = document.querySelector("#updated-quote");
const updateAuthorInputField = document.querySelector("#updated-author");
const updateActionBtn = document.querySelector("#update-quote-action");

hideUpdateQuoteModal();

export function showUpdateQuoteModal() {
  modalBody.classList.add("hidden");
  modalActionUpdateBody.classList.remove("hidden");
}

export function hideUpdateQuoteModal() {
  modalActionUpdateBody.classList.add("hidden");
}

function updateButtonClickHandler() {}
