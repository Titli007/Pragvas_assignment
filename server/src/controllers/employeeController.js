import Employee from "../model/Employee.js";

// Controller to create a new employee
export const createEmployee = async (req, res) => {
  try {
    console.log("adadad")
    const { EmployeeId , EmpName , Department, Salary } = req.body;
    console.log(EmployeeId)
    // Check if the EmployeeId already exists
    const existingEmployee = await Employee.findOne({
      where: {
        EmployeeId: EmployeeId
      }
    })
    console.log("asdasdadsad13eqweasd",existingEmployee)
    if (existingEmployee) {
      console.log("adadad2")
      return res.status(400).send({ message: 'Employee already exists' });
    }

    const newEmployee = new Employee({
        EmployeeId,
        EmpName,
        Department,
        Salary
    });

    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller to get all employees
export const getEmployees = async (req, res) => {
  try {
    console.log("adadsdasdasd")
    const employees = await Employee.findAll();
    console.log(employees)
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};
