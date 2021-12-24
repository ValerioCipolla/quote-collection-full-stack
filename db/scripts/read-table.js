import query from "../index.js";

export async function readQuotesTable() {
  const data = await query(`SELECT * FROM quotes`);
  console.log(data.rows);
}

readQuotesTable();
