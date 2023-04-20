import express from 'express';
import Office from '../models/office.model.js';
const router = express.Router();

router.get('/office', (req, res) => {
  res.send('Hello World!');
});

/**
 * !Create Employee
 */
router.post('/office', async (req, res) => {
  const { name, location, addressLine1, addressLine2, state, country } = req.body;
  if (!name || !addressLine1 || !country) return res.json({ message: 'Please fill all the fields' });
  try {
    const office = await Office.findOne({ name });

    if (office) return res.json({ message: 'Office already exists by this name' });

    const newOffice = new Office({
      name,
      location,
      addressLine1,
      addressLine2,
      state,
      country,
    });

    await newOffice.save();
    res.json({
      message: 'Office Created Successfully',
      office: newOffice,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !Update Employee
 */

router.put('/office/:id', async (req, res) => {
  if (!req.params.id) return res.json({ message: 'Please provide an id' });
  const updatedOfficeFields = {
    ...req.body,
  };

  try {
    const office = await Office.findByIdAndUpdate(req.params.id, updatedOfficeFields, { new: true });

    res.json({
      message: 'Office Updated Successfully',
      office,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !Delete Employee
 */

router.delete('/office/:id', async (req, res) => {
  if (!req.params.id) return res.json({ message: 'Please provide an id' });

  try {
    const office = await Office.findByIdAndDelete(req.params.id);
    if (!office) return res.json({ message: 'Office not found' });
    res.json({
      message: 'Office Deleted Successfully',
      office,
    });
  } catch (err) {}
});

/**
 * !get Employee
 */

router.get('/office/:id', async (req, res) => {
  if (!req.params.id) return res.json({ message: 'Please provide an id' });

  try {
    const office = await Office.findById(req.params.id);
    res.json({
      message: 'Office Fetched Successfully',
      office,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

/**
 * !getAll Employee
 */

router.get('/offices', async (req, res) => {
  try {
    const offices = await Office.find();

    res.json({
      message: 'Offices Fetched Successfully',
      offices,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

export default router;
