const Employee = require('../models/Employee');

// Service for CRUD operations on employees

exports.getAllEmployees = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    throw new Error('Error fetching employees');
  }
};

exports.getEmployeeById = async (id) => {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (error) {
    throw new Error('Error fetching employee by ID');
  }
};

exports.createEmployee = async (employeeData) => {
  try {
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    return newEmployee;
  } catch (error) {
    throw new Error('Error creating employee');
  }
};

exports.updateEmployee = async (id, employeeData) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, employeeData, { new: true });
    return updatedEmployee;
  } catch (error) {
    throw new Error('Error updating employee');
  }
};

exports.deleteEmployee = async (id) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    return deletedEmployee;
  } catch (error) {
    throw new Error('Error deleting employee');
  }
};
