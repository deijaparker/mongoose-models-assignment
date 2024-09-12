const express = require("express");
const connectToDb = require("./connectToDb");
const noteRoutes = require("./notesController");

const app = express();

app.use(express.json());

// Connect to the database
connectToDb();

// Use the controller for handling requests
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
