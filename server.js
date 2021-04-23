const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.listen(3001, () => {
    console.log("App running on port 3001!");
});
  