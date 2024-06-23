import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Employee = sequelize.define('Employee', {
  EmployeeId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  EmpName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Employee;
