const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const auth = require('../middleware/auth'); // Protect routes with JWT

// CREATE: Add client safely
router.post('/', auth, async (req, res) => {
  try {
    const { name, email, phone, company } = req.body;
    
    // Check if client already exists to prevent duplication overwrite
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'A client with this email already exists.' });
    }

    const newClient = new Client({ name, email, phone, company });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(500).json({ message: 'Database failed to store client data.', error: err.message });
  }
});

// READ: Fetch all clients
router.get('/', auth, async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Database query failed.', error: err.message });
  }
});

module.exports = router;