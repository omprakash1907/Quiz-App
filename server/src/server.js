const express = require("express");
const dbConnection = require("./config/db");
const Config = require("./config");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");



const app = express();

const PORT = Config.PORT || 5000;

// Middleware to parse incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



// dbConnection
dbConnection();

// API routes
app.use('/api', quizRoutes);

// Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err, "Server is not connected");
  }
  console.log(`Listening on port : http://localhost:${PORT}`);
});