// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Fetch all expenses when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then((response) => {
        setExpenses(response.data);  // Update the expenses state
      })
      .catch((error) => {
        console.error('Error fetching expenses:', error);
      });
  }, []);

  const handleExpenseAdded = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]); // Add new expense
  };

  const handleDelete = async (expenseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${expenseId}`); // Delete expense
      setExpenses(expenses.filter((expense) => expense._id !== expenseId)); // Remove from the state
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense); // Set the expense to edit
  };

  const handleUpdate = async (updatedExpense) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/expenses/${updatedExpense._id}`, updatedExpense);
      const updatedExpenses = expenses.map((expense) =>
        expense._id === updatedExpense._id ? response.data : expense
      );
      setExpenses(updatedExpenses); // Update the expenses list with the updated one
      setEditingExpense(null); // Reset editing state
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {editingExpense ? (
        <div>
          <h2>Edit Expense</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate({
                ...editingExpense,
                name: e.target.name.value,
                amount: e.target.amount.value,
                category: e.target.category.value,
              });
            }}
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={editingExpense.name}
                required
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                defaultValue={editingExpense.amount}
                required
              />
            </div>
            <div>
              <label>Category</label>
              <input
                type="text"
                name="category"
                defaultValue={editingExpense.category}
                required
              />
            </div>
            <button type="submit">Update Expense</button>
            <button type="button" onClick={() => setEditingExpense(null)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <AddExpense onExpenseAdded={handleExpenseAdded} />
      )}

      <ExpenseList expenses={expenses} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
