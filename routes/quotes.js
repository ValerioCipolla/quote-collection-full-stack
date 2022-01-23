import express from "express";
import { transporter } from "../mailer.js";
import { emailInfo } from "../config.js";
import { jsPDF } from "jspdf";
import {
  getAllQuotes,
  getQuoteById,
  createQuote,
  deleteQuoteById,
  updateQuoteById,
  getAllAuthors,
  getQuotesByAuthor,
} from "../models/quotes.js";
const router = express.Router();

// QUOTES routes url/api/quotes

router.get("/quotes", async function (req, res) {
  const author = req.query.author;
  if (author) {
    const result = await getQuotesByAuthor(author);
    if (result.length > 0) {
      res.json({
        success: true,
        message: `found quotes by '${author}'`,
        payload: result,
      });
      return;
    } else {
      res.json({
        success: false,
        message: `cannot find quotes by '${author}'`,
      });
      return;
    }
  }
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

router.get("/quotes/:id", async function (req, res) {
  const id = req.params.id;
  const result = await getQuoteById(id);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `quote with id ${id} was not found`,
    });
    return;
  }
  res.json({
    success: true,
    message: `quote with id ${id} found :)`,
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

//AUTHORS route url/api/authors

router.get("/authors", async function (req, res) {
  const result = await getAllAuthors();
  res.json({
    success: true,
    message: "All authors found :)",
    payload: result,
  });
});

// POST request for email

router.post("/send", async function (req, res) {
  const recipient = req.body.recipient;
  const content = req.body.content;
  const mailOptions = {
    from: emailInfo.email_address,
    to: recipient,
    subject: "Your requested quote",
    text: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({
    success: true,
    message: "email sent",
  });
});

// POST REQUEST FOR PDF

router.post("/pdf", async function (req, res) {
  let doc = new jsPDF();

  doc.text(20, 20, "Hello world!");
  doc.text(20, 30, "This is client-side Javascript to generate a PDF.");

  res.json({
    success: true,
    payload: doc.output("datauristring"),
  });
});
export default router;
