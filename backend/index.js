require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connection = require("./db"); 
const userRoutes = require('./routes/userRoutes');

const app = express();

// Database connection
connection();

// Middlewares
app.use(express.json()); // Call the method correctly with parentheses
app.use(cors());

// Use user routes under /api/users
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));