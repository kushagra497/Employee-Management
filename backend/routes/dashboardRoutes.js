// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');

// Example protected route
router.get('/', authenticateUser, (req, res) => {
  res.send('Dashboard Route');
});

module.exports = router;
