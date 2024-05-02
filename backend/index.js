// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes'); // Include dashboard routes
const { authenticateUser } = require('./middleware/authMiddleware');
const employeeRoutes = require('./routes/employeeRoutes');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);



// Routes
app.use(employeeRoutes);

// Protected routes
app.use('/api/dashboard', authenticateUser, dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
