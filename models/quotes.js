import query from "../db/index.js";

export async function getAllQuotes() {
  const data = await query(`SELECT * FROM quotes`);
  return data.rows;
}
