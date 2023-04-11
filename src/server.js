// npm i express, nodemon, body-parser

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`work on ${PORT}`);
});
