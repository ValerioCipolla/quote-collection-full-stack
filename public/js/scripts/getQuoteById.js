import { URL } from "../main.js";

export async function getQuoteById(id) {
  const response = await fetch(`${URL}/api/quotes/${id}`);
  const data = await response.json();
  const currentQuote = await data.payload;
  return currentQuote;
}
