import query from "../db/index.js";

export async function getAllQuotes() {
  const data = await query(`SELECT * FROM quotes;`);
  return data.rows;
}

export async function getQuoteById(id) {
  const data = await query(`SELECT * FROM quotes WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getQuotesByAuthor(author) {
  const data = await query(`SELECT * FROM quotes WHERE author = $1`, [author]);
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

export async function updateQuoteById(quote, id) {
  const data = await query(
    `UPDATE quotes SET quote = $1, author = $2 WHERE id = $3 RETURNING *`,
    [quote.quote, quote.author, id]
  );
  return data.rows;
}

export async function getAllAuthors() {
  const data = await query("SELECT DISTINCT author from quotes;");
  return data.rows;
}
