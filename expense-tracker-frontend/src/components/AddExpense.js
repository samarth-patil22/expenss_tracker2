// src/components/AddExpense.js
import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ onExpenseAdded }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create the expense object
    const newExpense = { name, amount, category };

    try {
      // Make the POST request to add a new expense
      const response = await axios.post('http://localhost:5000/api/expenses', newExpense);
      
      // Call the parent function to refresh the list of expenses
      onExpenseAdded(response.data);  // Send back the new expense added

      // Reset form fields
      setName('');
      setAmount('');
      setCategory('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
