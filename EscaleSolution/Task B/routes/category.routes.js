import mongoose from 'mongoose';
import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

router.post('/categories', async (req, res) => {
  try {
    const { name, level, parentId } = req.body;
    console.log(req.body);

    if (parentId && !mongoose.Types.ObjectId.isValid(parentId)) {
      return res.status(400).json({ error: 'Invalid parent category ID' });
    }

    let parent;
    if (parentId) {
      parent = await Category.findById(parentId);
      if (!parent) {
        return res.status(400).json({ error: 'Parent category not found' });
      }
    }

    const newCategory = new Category({
      name,
      level,
      parent: parent ? parent._id : null,
      children: [],
    });

    await newCategory.save();

    //parent's children array Update
    if (parent) {
      parent.children.push(newCategory);
      await parent.save();
    }

    res.json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find().populate('parent').populate('children');
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/categories/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const category = await Category.findById(req.params.id).populate('parent').populate('children');
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * !PUT a category by ID
 */
router.put('/categories/:id', async (req, res) => {
  try {
    const { name, level, parentId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    if (parentId && !mongoose.Types.ObjectId.isValid(parentId)) {
      return res.status(400).json({ error: 'Invalid parent category ID' });
    }

    //--------
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    //  new parent category if it exists
    let newParent;
    if (parentId) {
      newParent = await Category.findById(parentId);
      if (!newParent) {
        return res.status(400).json({ error: 'New parent category not found' });
      }
    }

    // Update the category's fields
    category.name = name || category.name;
    category.level = level || category.level;
    category.parent = newParent ? newParent._id : null;

    await category.save();

    // Remove the category from the old parent's children array
    if (category.parent && category.parent.toString() !== req.body.parentId) {
      const oldParent = await Category.findById(category.parent);
      if (oldParent) {
        oldParent.children.pull(category._id);
        await oldParent.save();
      }
    }

    // Add the category to the new parent's children array
    if (newParent) {
      if (newParent.children.includes(category._id))
        return res.status(400).json({ error: 'Category already exists in the parent category' });

      newParent.children.push(category);
      await newParent.save();
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * !Find all categories that have a given parent
 */

router.get('/categories/parent/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    const categories = await Category.find({ parent: req.params.id }).populate('parent').populate('children');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * !Find all categories that have a given children
 */

router.get('/categories/children/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    //children is an array of object ids
    const categories = await Category.find({ children: req.params.id }).populate('parent').populate('children');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * !DELETE a category by ID
 */
router.delete('/categories/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Remove the category from its parent's children array
    if (category.parent) {
      const parent = await Category.findById(category.parent);
      if (parent) {
        parent.children.pull(category._id);
        await parent.save();
      }
    }

    // Remove the category from its children's parent field
    for (const child of category.children) {
      console.log(child);
      const childDoc = await Category.findById(child);
      if (childDoc) {
        childDoc.parent = null;
        await childDoc.save();
      }
    }

    // Delete the category from the database
    await Category.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Category deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
