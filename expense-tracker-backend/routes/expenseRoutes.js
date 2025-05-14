// expense-tracker-backend/routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense'); // Import the Expense model

// Create a new expense
router.post('/', async (req, res) => {
  const { name, amount, category } = req.body;
  try {
    const newExpense = new Expense({ name, amount, category });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: 'Error creating expense', error: err });
  }
});

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();  // Fetch all expenses from the database
    console.log('Expenses found:', expenses); // Log expenses to the console
    res.status(200).json(expenses);
  } catch (err) {
    console.log('Error fetching expenses:', err); // Log errors
    res.status(400).json({ message: 'Error fetching expenses', error: err });
  }
});

// Get an expense by ID
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching expense', error: err });
  }
});

// Update an expense by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: 'Error updating expense', error: err });
  }
});

// Delete an expense by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting expense', error: err });
  }
});

module.exports = router;
