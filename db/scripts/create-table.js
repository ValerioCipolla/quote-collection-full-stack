import query from "../index.js";

export async function createQuotesTable() {
  await query(
    `CREATE TABLE IF NOT EXISTS quotes (id SERIAL PRIMARY KEY, quote TEXT, author TEXT);`
  );
}

createQuotesTable();
