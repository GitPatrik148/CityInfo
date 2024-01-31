const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdatabase", { useNewUrlParser: true, useUnifiedTopology: true });

// Use user routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
