const express = require('express');
const router = express.Router();

// GET /api/clients
router.get('/', async (req, res) => {
    res.json({ message: "Clients route connected successfully!" });
});

module.exports = router;