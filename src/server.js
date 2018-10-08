import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import bodyParser from "body-parser";
import App from "./client/App";
import { Html } from "./client/Html";
import { OPERATORS } from "./constants";
const port = 3000;
const server = express();

server.use(express.static("dist"));
server.use(bodyParser.json());

server.post("/api/calculate", (req, res) => {
  const { value1, value2, value3, operator } = req.body;
  const numbers = [value1, value2, value3].filter(value => value !== null);
  switch (operator) {
    case OPERATORS.SUM:
      return res.send({ result: numbers.reduce((all, one) => all + one, 0) });
    case OPERATORS.MULTIPLY:
      return res.send({ result: numbers.reduce((all, one) => all * one, 1) });
    default:
      return res.sendStatus(400);
  }
});

server.get("/", (req, res) => {
  const body = renderToString(<App />);
  res.send(Html({ body }));
});

server.listen(port);
