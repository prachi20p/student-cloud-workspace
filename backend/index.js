const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const noteRoutes = require("./routes/noteRoutes");
app.use("/notes", noteRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/health", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
