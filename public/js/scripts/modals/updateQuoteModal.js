import { closeModal, modalBody } from "../moreOptionsModal.js";
import { quoteSection, URL, getQuote } from "../../main.js";

const modalActionUpdateBody = document.querySelector(
  "#modal-action-update-body"
);
export const updateQuoteInputField = document.querySelector("#updated-quote");
export const updateAuthorInputField = document.querySelector("#updated-author");
const updateActionBtn = document.querySelector("#update-quote-action");
const modalCompletedActionUpdateBody = document.querySelector(
  "#modal-completed-action-update"
);
const closeModalCompletedActionUpdate = document.querySelector(
  "#close-modal-completed-action-update"
);

export function showUpdateQuoteModal() {
  modalBody.classList.add("hidden");
  modalActionUpdateBody.classList.remove("hidden");
  updateActionBtn.addEventListener("click", updateButtonClickHandler);
}

export function hideUpdateQuoteModal() {
  modalActionUpdateBody.classList.add("hidden");
  modalCompletedActionUpdateBody.classList.add("hidden");
}

async function updateButtonClickHandler() {
  let updatedQuote = updateQuoteInputField.value;
  let updatedAuthor = updateAuthorInputField.value;
  let quoteId = quoteSection.dataset.id;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quote: updatedQuote, author: updatedAuthor }),
  };
  const response = await fetch(`${URL}/api/quotes/${quoteId}`, requestOptions);
  const data = await response.json();
  updateQuoteInputField.value = "";
  updateAuthorInputField.value = "";
  modalActionUpdateBody.classList.add("hidden");
  modalCompletedActionUpdateBody.classList.remove("hidden");
  closeModalCompletedActionUpdate.addEventListener("click", closeModal);
  await getQuote();
}
