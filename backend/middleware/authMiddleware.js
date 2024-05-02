// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secretkey');
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateUser };
