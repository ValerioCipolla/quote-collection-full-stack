import express from "express";
import { getAllQuotes } from "../models/quotes.js";
const router = express.Router();

/* GET users listing. */
router.get("/quotes", async function (req, res) {
  const result = await getAllQuotes();
  res.json({
    success: true,
    message: `All quotes found :)`,
    payload: result,
  });
});

export default router;
