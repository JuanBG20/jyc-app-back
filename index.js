require("dotenv").config();
const express = require("express");
const dbConnect = require("./db");
const cors = require("cors");
const router = require("./routes/index.routes");

const app = express();

dbConnect(app);

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/v1", router);
