import express from 'express';
import { createEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

// Route to create a new employee
router.post('/post/employees', createEmployee);

// Route to get all employees
router.get('/get/employees', getEmployees);

export default router;
