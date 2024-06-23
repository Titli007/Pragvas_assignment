import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.USER
const pass = process.env.PASSWORD
const host = process.env.HOST

const sequelize = new Sequelize('Emp_Details', user, pass, {
  host: host,
  dialect: 'mysql',
});


export default sequelize
