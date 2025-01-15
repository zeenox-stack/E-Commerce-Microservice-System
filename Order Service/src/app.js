const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const  router = require('./routes/routes'); 

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    mode: "cors",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/orders', router);

module.exports = app;