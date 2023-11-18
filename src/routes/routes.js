
const express = require('express');
const router = express.Router();

// Api
router.get("/api/users", (req, res) => res.send('All Users'));

module.exports = router;
