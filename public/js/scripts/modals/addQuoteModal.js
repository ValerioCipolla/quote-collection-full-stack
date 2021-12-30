import { backgrounModal } from "../moreOptionsModal.js";

export const addQuoteModal = document.querySelector("#add-quote-modal");
const closeAddQuoteModalBtn = document.querySelector(
  "#close-add-quote-modal-btn"
);

export function showAddQuoteModal() {
  backgrounModal.classList.remove("hidden");
  addQuoteModal.classList.remove("hidden");
  closeAddQuoteModalBtn.addEventListener("click", closeAddQuoteModal);
  backgrounModal.addEventListener("click", closeAddQuoteModal);
  addQuoteModal.addEventListener("click", addQuoteModalClick);
}

export function closeAddQuoteModal() {
  backgrounModal.classList.add("hidden");
  addQuoteModal.classList.add("hidden");
}

function addQuoteModalClick(event) {
  event.stopPropagation();
}
