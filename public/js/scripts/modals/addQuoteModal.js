import { backgrounModal } from "../moreOptionsModal.js";
import { URL } from "../../main.js";
import { modalCompletedActionSendBody } from "./sendQuoteModal.js";

export const addQuoteModal = document.querySelector("#add-quote-modal");
const modalActionAddBody = document.querySelector("#modal-action-add-body");
const closeAddQuoteModalBtn = document.querySelector(
  "#close-add-quote-modal-btn"
);
const createQuoteInputField = document.querySelector("#created-quote");
const createAuthorInputField = document.querySelector("#created-author");
const addActionBtn = document.querySelector("#add-quote-action");
const modalCompletedActionAddBody = document.querySelector(
  "#modal-completed-action-add"
);
const closeModalCompletedActionAdd = document.querySelector(
  "#close-modal-completed-action-add"
);

export function showAddQuoteModal() {
  backgrounModal.classList.remove("hidden");
  addQuoteModal.classList.remove("hidden");
  modalActionAddBody.classList.remove("hidden");
  closeAddQuoteModalBtn.addEventListener("click", closeAddQuoteModal);
  backgrounModal.addEventListener("click", closeAddQuoteModal);
  addQuoteModal.addEventListener("click", addQuoteModalClick);
  addActionBtn.addEventListener("click", addQuoteClickHandler);
}

export function closeAddQuoteModal() {
  backgrounModal.classList.add("hidden");
  addQuoteModal.classList.add("hidden");
  modalActionAddBody.classList.add("hidden");
  modalCompletedActionAddBody.classList.add("hidden");
  resetInputFields();
}

function addQuoteModalClick(event) {
  event.stopPropagation();
}

function resetInputFields() {
  createAuthorInputField.value = "";
  createQuoteInputField.value = "";
}

async function addQuoteClickHandler() {
  let createdQuote = createQuoteInputField.value;
  let createdAuthor = createAuthorInputField.value;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quote: createdQuote, author: createdAuthor }),
  };
  const response = await fetch(`${URL}/api/quotes/`, requestOptions);
  const data = await response.json();
  resetInputFields();
  modalActionAddBody.classList.add("hidden");
  modalCompletedActionAddBody.classList.remove("hidden");
  closeModalCompletedActionAdd.addEventListener("click", closeAddQuoteModal);
}
