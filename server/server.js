const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose
  .connect(
    "mongodb+srv://rishav280796:UOlCgd7ftxJAiqxf@cluster0.v2t9j.mongodb.net/"
  )
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((error) => console.log("error"));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log("server is running on port 3000"));
