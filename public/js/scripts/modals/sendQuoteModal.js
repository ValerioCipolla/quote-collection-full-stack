import { modalBody, closeModal } from "../moreOptionsModal.js";
import { URL, quote, author } from "../../main.js";

export const modalActionSendBody = document.querySelector(
  "#modal-action-send-body"
);
const sendActionBtn = document.querySelector("#send-email-action");
export const modalCompletedActionSendBody = document.querySelector(
  "#modal-completed-action-send"
);
const closeModalCompletedActionSendBtn = document.querySelector(
  "#close-modal-completed-action-send"
);
export const emailInputField = document.querySelector("#user-email-address");

export function showSendQuoteModal() {
  modalBody.classList.add("hidden");
  modalActionSendBody.classList.remove("hidden");
  sendActionBtn.addEventListener("click", sendButtonClickHandler);
}

export async function sendButtonClickHandler() {
  modalActionSendBody.classList.add("hidden");
  modalCompletedActionSendBody.classList.remove("hidden");
  closeModalCompletedActionSendBtn.addEventListener("click", closeModal);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      recipient: emailInputField.value,
      content: `${quote.innerText} by ${author.innerText}`,
    }),
  };
  const response = await fetch(`${URL}/api/send`, requestOptions);
  const data = await response.json();
  console.log(data);
}

export function hideSendQuoteModal() {
  modalActionSendBody.classList.add("hidden");
  modalCompletedActionSendBody.classList.add("hidden");
  emailInputField.value = "";
}
