// const express = require('express');
// const router = express.Router();
// const employeeController = require('../controllers/employeeController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.get('/', authMiddleware.verifyToken, employeeController.getAllEmployees);
// router.get('/:id', authMiddleware.verifyToken, employeeController.getEmployeeById);
// router.post('/', authMiddleware.verifyToken, employeeController.createEmployee);
// router.put('/:id', authMiddleware.verifyToken, employeeController.updateEmployee);
// router.delete('/:id', authMiddleware.verifyToken, employeeController.deleteEmployee);

// module.exports = router;

// employeeRoutes.js


// // Create a new employee
// const express = require('express');
// const router = express.Router();
// const Employee = require('../models/Employee');

// // Create a new employee
// router.post('/', async (req, res) => {
//     try {
//         const { firstName, lastName, email, department, salary } = req.body;
//         const newEmployee = new Employee({
//             firstName,
//             lastName,
//             email,
//             department,
//             salary
//         });
//         await newEmployee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// module.exports = router;


// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create a new employee
router.post('/api/employees', async (req, res) => {
  try {
    const { firstName, lastName, email, department, salary } = req.body;

    // Validate input data
    if (!firstName || !lastName || !email || !department || !salary) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      department,
      salary
    });

    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

