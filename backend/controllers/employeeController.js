const Employee = require('../models/Employee');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new employee
const createEmployee = async (req, res) => {
  const { firstName, lastName, email, department, salary } = req.body;
  try {
    const newEmployee = new Employee({ firstName, lastName, email, department, salary });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update employee by ID
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, department, salary } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, { firstName, lastName, email, department, salary }, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete employee by ID
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
