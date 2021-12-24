import query from "../index.js";

export async function dropQuotesTable() {
  await query(`DROP TABLE IF EXISTS quotes`);
}

dropQuotesTable();
