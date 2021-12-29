import { modalBody, closeModal } from "../moreOptionsModal.js";
import { quoteSection, URL } from "../../main.js";

const modalActionDeleteBody = document.querySelector(
  "#modal-action-delete-body"
);
const deleteActionBtn = document.querySelector("#delete-quote-action");
const modalCompletedActionDeleteBody = document.querySelector(
  "#modal-completed-action-delete"
);
const closeModalCompletedActionDelete = document.querySelector(
  "#close-modal-completed-action-delete"
);

export function showDeleteQuoteModal() {
  modalBody.classList.add("hidden");
  modalActionDeleteBody.classList.remove("hidden");
  deleteActionBtn.addEventListener("click", deleteButtonClickHandler);
}

export function hideDeleteQuoteModal() {
  modalActionDeleteBody.classList.add("hidden");
  modalCompletedActionDeleteBody.classList.add("hidden");
}

async function deleteButtonClickHandler() {
  let quoteId = quoteSection.dataset.id;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${URL}/api/quotes/${quoteId}`, requestOptions);
  const data = await response.json();
  modalActionDeleteBody.classList.add("hidden");
  modalCompletedActionDeleteBody.classList.remove("hidden");
  closeModalCompletedActionDelete.addEventListener("click", closeModal);
}
