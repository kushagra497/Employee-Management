const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

// Service for generating JWT token
exports.generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};
