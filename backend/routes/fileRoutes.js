const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// upload file
router.post("/", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file.filename
  });
});

// list files
router.get("/", (req, res) => {
  const fs = require("fs");
  fs.readdir("./uploads", (err, files) => {
    if (err) return res.status(500).json(err);
    res.json(files);
  });
});

module.exports = router;
