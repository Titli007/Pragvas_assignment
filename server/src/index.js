import express from 'express';
import cors from 'cors';
import sequelize from './database/config.js';
import router from './routes/employeeRoutes.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT;

// Test the database connection and sync the models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use(cors());
app.use(express.json());

app.use(router); // Add a base path for the routes

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
