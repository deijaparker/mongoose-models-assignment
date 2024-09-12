const express = require("express");
const router = express.Router();
const { Note } = require("./note");

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
});

// Create a new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: "Error creating note" });
  }
});

module.exports = router;
