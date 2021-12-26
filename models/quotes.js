import query from "../db/index.js";

export async function getAllQuotes() {
  const data = await query(`SELECT * FROM quotes;`);
  return data.rows;
}

export async function createQuote(quote) {
  const data = await query(
    `INSERT INTO quotes (quote, author) VALUES ($1, $2) RETURNING *;`,
    [quote.quote, quote.author]
  );
  return data.rows;
}

export async function deleteQuoteById(id) {
  const data = await query(`DELETE FROM quotes WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows;
}
