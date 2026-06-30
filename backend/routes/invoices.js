const express = require('express');
const router = express.Router();

// GET /api/invoices
router.get('/', async (req, res) => {
    res.json({ message: "Invoices route connected successfully!" });
});

module.exports = router;