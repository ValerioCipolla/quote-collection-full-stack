import pg from "pg";

import { dbInfo } from "../config.js";

export const pool = new pg.Pool({
  user: dbInfo.username,
  host: dbInfo.dbhost,
  database: dbInfo.dbname,
  password: dbInfo.password,
  port: dbInfo.dbport,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default function query(text, params) {
  return pool.query(text, params);
}
