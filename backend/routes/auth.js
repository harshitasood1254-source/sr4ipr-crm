const express = require('express');
const router = express.Router();

// Test Route: POST /api/auth/register
router.post('/register', async (req, res) => {
    res.json({ message: "Auth route connected successfully!" });
});

module.exports = router;