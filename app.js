const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv");
var cors = require('cors')
  const app = express();
const registerRoutes = require("./router/registerRoutes");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
dotenv.config();
app.use("/api", registerRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});