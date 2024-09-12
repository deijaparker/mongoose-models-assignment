const express = require("express");
const connectToDb = require("./connectToDb");
const notesController = require("./notesController");

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectToDb();

// Routes
app.use("/notes", notesController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
