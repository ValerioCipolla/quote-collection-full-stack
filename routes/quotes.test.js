import app from "../app.js";
import request from "supertest";
import { pool } from "../db/index.js";

describe("checking get requests to api/quotes", () => {
  test("/api/quotes should return all quotes, each quote should be an object with id, quote, and author", async function () {
    await request(app)
      .get("/api/quotes")
      .expect(200)
      .expect(function (res) {
        const actual = res.body;
        const expected = {
          success: true,
          message: `All quotes found :)`,
          payload: expect.any(Array),
        };
        expect(actual).toStrictEqual(expected);

        actual.payload.forEach(function (quote) {
          const actual = quote;
          const expected = {
            id: expect.any(Number),
            author: expect.any(String),
            quote: expect.any(String),
          };
          expect(actual).toStrictEqual(expected);
        });
      });
  });
});

describe("checking post requests to /api/quotes", () => {
  test("/api/quotes should create a new quote with specified body", async function () {
    await request(app)
      .post("/api/quotes")
      .send({
        quote: "this quote was created by a test",
        author: "Me",
      })
      .expect(function (res) {
        const expected = {
          success: true,
          message: "quote created :)",
          payload: expect.any(Array),
        };
        const actual = res.body;
        expect(actual).toStrictEqual(expected);
      });
  });
});

describe("checking update requests to /api/quotes/1", () => {
  test("/api/quotes/1 should update the quote with id 1", async function () {
    await request(app)
      .put("/api/quotes/1")
      .send({
        quote: "this quote was updated by a test",
        author: "Me",
      })
      .expect(function (res) {
        const expected = {
          success: true,
          message: "quote with id 1 has been updated",
          payload: expect.any(Array),
        };
        const actual = res.body;
        expect(actual).toStrictEqual(expected);
      });
  });
});

describe("checking delete requests to /api/quotes/5", () => {
  test("/api/quotes/5 should delete the quote with id 5", async function () {
    await request(app)
      .delete("/api/quotes/5")
      .expect(function (res) {
        const expected = {
          success: true,
          message: "quote with id 5 has been deleted",
          payload: expect.any(Array),
        };
        const actual = res.body;
        expect(actual).toStrictEqual(expected);
      });
  });
});

afterAll(async () => {
  await pool.end();
});
