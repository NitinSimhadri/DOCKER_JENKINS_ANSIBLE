const request = require("supertest");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Node.js App Running on EC2 with Docker");
});

describe("App tests", () => {
  test("health endpoint should return 200", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("OK");
  });

  test("home endpoint should return app message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Node.js App Running on EC2 with Docker");
  });
});
