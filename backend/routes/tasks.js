const express = require('express');
const router = express.Router();

// GET /api/tasks
router.get('/', async (req, res) => {
    res.json({ message: "Tasks route connected successfully!" });
});

module.exports = router;