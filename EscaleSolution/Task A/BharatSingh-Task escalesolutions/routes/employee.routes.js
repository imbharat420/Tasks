import express from 'express';
import Employee from '../models/employee.model.js';
import fileUpload from '../utils/fileUpload.js';
const router = express.Router();
let handleError = (req, res, next, msg, err) => {
  // Create an error and pass it to the next function
  next(new Error(msg + ' error ' + (err.message || '')));
};
/**
 * !Create Employee
 */
router.post('/employee', fileUpload.single('profilePic'), async (req, res) => {
  const { name, age, email, number, profilePic, designation, officeDetail } = req.body;

  if (!email || !number || !designation || !officeDetail) return res.json({ message: 'Please fill all the fields' });

  try {
    if (req.fileValidationError) return res.json({ message: req.fileValidationError });
    console.log(req.file);

    let profilePicUrl = req.file.filename;

    const employee = await Employee.findOne({ $or: [{ email }, { number }] });

    if (employee) return res.json({ message: 'Employee already exists by this email or number' });

    const employeeObj = {
      ...(name && { name }),
      ...(age && { age }),
      ...(email && { email }),
      ...(number && { number }),
      ...(designation && { designation }),
      ...(profilePic && { profilePic }),
      ...(officeDetail && { officeDetail }),
      ...(profilePicUrl && { profilePicUrl }),
    };

    const newEmployee = new Employee(employeeObj);

    newEmployee.save().then(async (employee) => {
      let emp = await employee.populate('officeDetail');
      res.json({
        message: 'Employee Created Successfully',
        employee: emp,
      });
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !update Employee
 */
router.put('/employee/:id', async (req, res) => {
  const updatedEmployeeFields = {
    ...req.body,
  };

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: updatedEmployeeFields },
      { new: true },
    )
      .populate('officeDetail')
      .exec();
    res.json({
      message: 'Employee Updated Successfully',
      employee: updatedEmployee,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !delete Employee
 */
router.delete('/employee/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.json({ message: 'Employee not found' });

    res.json({
      message: 'Employee Deleted Successfully',
      employee: deletedEmployee,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !get all Employees
 */

router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find().populate('officeDetail');
    res.json({
      message: 'Employees Fetched Successfully',
      employees,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !get Employee
 */

router.get('/employee/:id', async (req, res) => {
  try {
    const employees = await Employee.findById({
      _id: req.params.id,
    }).populate('officeDetail');
    res.json({
      message: 'Employees Fetched Successfully',
      employees,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

export default router;
// abhishek.sharma@escalesolutions.com
