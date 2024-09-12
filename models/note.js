const mongoose = require("mongoose");

// Define the schema for the 'Note' model
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define another schema for a potential 'Category' model
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

// Create Mongoose models
const Note = mongoose.model("Note", noteSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = { Note, Category };
