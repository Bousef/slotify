// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const pool = require('./config/database');  // Corrected the path to 'database.js'

dotenv.config();  // Configure dotenv to use environment variables

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Example route to fetch data from the PostgreSQL database
app.get('/', async (req, res) => {
  try {
    // Send a response with the database name
    res.send(`Connected to database:`);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Database connection error');
  }
});

// Set up the server to listen on a port (either from the environment or default to 5001)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


