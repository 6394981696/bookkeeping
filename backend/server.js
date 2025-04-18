const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const libraryRoutes = require("./routes/library.routes");
const borrowRoutes = require("./routes/borrow.routes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB().catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
  process.exit(1); // Exit the process if DB connection fails
});

// Routes
app.use("/api/users", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/libraries", libraryRoutes);
app.use("/api/borrow", borrowRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8080;

// Start server and handle graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown for process termination (SIGINT or SIGTERM)
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server shut down gracefully.");
    process.exit(0);
  });
});
