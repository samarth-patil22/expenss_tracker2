// src/components/ExpenseList.js
import React from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  const handleDelete = (expenseId) => {
    onDelete(expenseId); // Call the delete function passed down from App.js
  };

  const handleEdit = (expense) => {
    onEdit(expense); // Call the edit function passed down from App.js
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li key={expense._id}>
              {expense.name} - ₹{new Intl.NumberFormat('en-IN').format(expense.amount)} - {expense.category}
              <button onClick={() => handleEdit(expense)}>Edit</button>
              <button onClick={() => handleDelete(expense._id)}>Delete</button>
            </li>
          ))
        ) :(
          <p>No expenses available</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
