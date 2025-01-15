const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require("./routes/routes");

const app = express();

app.use(cors(
    
));
app.use(express.json());
app.use(cookieParser());
app.use("/users", router);

module.exports = app;
