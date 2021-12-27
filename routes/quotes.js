import express from "express";
import {
  getAllQuotes,
  createQuote,
  deleteQuoteById,
  updateQuoteById,
} from "../models/quotes.js";
const router = express.Router();

router.get("/quotes", async function (req, res) {
  const result = await getAllQuotes();
  if (result.length <= 0) {
    res.status(404).json({
      success: false,
      message: "No quotes found :(",
    });
    return;
  }
  res.json({
    success: true,
    message: `All quotes found :)`,
    payload: result,
  });
});

router.post("/quotes", async function (req, res) {
  const quote = req.body;
  const result = await createQuote(quote);
  res.status(201).json({
    success: true,
    message: `quote created :)`,
    payload: result,
  });
});

router.delete("/quotes/:id", async function (req, res) {
  const id = req.params.id;
  const result = await deleteQuoteById(id);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `quote with id ${id} was not found`,
    });
    return;
  }
  res.json({
    success: true,
    message: `quote with id ${id} has been deleted`,
    payload: result,
  });
});

router.put("/quotes/:id", async function (req, res) {
  const id = req.params.id;
  const quote = req.body;
  const result = await updateQuoteById(quote, id);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `quote with id ${id} was not found`,
    });
    return;
  }
  res.json({
    success: true,
    message: `quote with id ${id} has been updated`,
    payload: result,
  });
});

export default router;
