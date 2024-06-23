import React, { useState } from 'react';
import axios from 'axios';
import '../css/employeeForm.css';

const apiUrl = import.meta.env.VITE_API_URL;

console.log("asasas",apiUrl)

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    EmployeeId: '',
    EmpName: '',
    Department: '',
    Salary: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.EmployeeId) newErrors.EmployeeId = 'Employee ID is required';
    if (!formData.EmpName) newErrors.EmpName = 'Employee Name is required';
    if (!formData.Department) newErrors.Department = 'Department is required';
    if (!formData.Salary) {
      newErrors.Salary = 'Salary is required';
    } else if (isNaN(formData.Salary)) {
      newErrors.Salary = 'Salary must be a number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        console.log("sdsfsdf")
        console.log(formData);
        const response = await axios.post(`${apiUrl}/post/employees`, formData);
        console.log('Form data submitted successfully:', response.data);
        console.log("sdsfsdf")
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
      setFormData({
        EmployeeId: '',
        EmpName: '',
        Department: '',
        Salary: ''
      });

      console.log("dfwefwef",formData)
    }
  };

  return (
    <div className='container'>
      <h1 className='heading'>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="EmployeeId"
            value={formData.EmployeeId}
            onChange={handleChange}
          />
          {errors.EmployeeId && <span>{errors.EmployeeId}</span>}
        </div>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            name="EmpName"
            value={formData.EmpName}
            onChange={handleChange}
          />
          {errors.EmpName && <span>{errors.EmpName}</span>}
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="Department"
            value={formData.Department}
            onChange={handleChange}
          />
          {errors.Department && <span>{errors.Department}</span>}
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
          />
          {errors.Salary && <span>{errors.Salary}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
