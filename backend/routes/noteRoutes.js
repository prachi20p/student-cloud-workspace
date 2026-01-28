const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// create note
router.post("/", async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

// get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

module.exports = router;
