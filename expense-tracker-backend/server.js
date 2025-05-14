// expense-tracker-backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');  // Import routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/expenses', expenseRoutes);  // Use expense routes for `/api/expenses`

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
