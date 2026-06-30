require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Initialize DB Connection
connectDB();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://your-frontend.vercel.app' : 'http://localhost:3000',
  credentials: true
}));
app.use(express.json()); // Parses incoming json requests smoothly

// Core System Routes[cite: 1]
app.use('/api/auth', require('./routes/auth'));[cite: 1]
app.use('/api/clients', require('./routes/clients'));[cite: 1]
app.use('/api/invoices', require('./routes/invoices'));[cite: 1]
app.use('/api/tasks', require('./routes/tasks'));[cite: 1]

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API layer initialized on port ${PORT}`));