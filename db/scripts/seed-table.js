import query from "../index.js";
import { quotes } from "../seed-data.js";

export async function seedQuotesTable() {
  for (let i = 0; i < quotes.length; i++) {
    await query(`INSERT INTO quotes (quote, author) VALUES ($1, $2)`, [
      quotes[i].quote,
      quotes[i].author,
    ]);
  }
}

seedQuotesTable();
