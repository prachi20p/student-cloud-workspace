const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // 👈 THIS IS VERY IMPORTANT
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
