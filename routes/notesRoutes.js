const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

// Route to get all notes
router.get("/", notesController.getAllNotes);

// Route to create a new note
router.post("/", notesController.createNote);

// Route to get a specific note by ID
router.get("/:id", notesController.getNoteById);

// Route to update a note by ID
router.put("/:id", notesController.updateNote);

// Route to delete a note by ID
router.delete("/:id", notesController.deleteNote);

module.exports = router;
