import app from "../app.js";
import request from "supertest";

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
