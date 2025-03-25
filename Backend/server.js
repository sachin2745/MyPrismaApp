const express = require("express");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
