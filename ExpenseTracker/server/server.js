const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of the express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'your_new_password', // Replace with your MySQL password
  database: 'expense_tracker' // Replace with your database name
});

// Test DB connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release();
});

// Create the expenses table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(10)
  );
`;
db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Failed to create table:', err.message);
  } else {
    console.log('Expenses table is ready.');
  }
});

// Get all expenses (sorted by date DESC then id DESC)
app.get('/api/expenses', (req, res) => {
  const query = 'SELECT * FROM expenses ORDER BY date DESC, id DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});

// Get total expenses
app.get('/api/expenses/total', (req, res) => {
  const query = 'SELECT SUM(amount) AS total FROM expenses';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ total: results[0].total || 0 });
  });
});

// Get a specific expense by ID
app.get('/api/expenses/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM expenses WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.status(200).json(results[0]);
  });
});

// Add a new expense
app.post('/api/expenses', (req, res) => {
  const { amount, category, date } = req.body;
  const time = new Date().toTimeString().split(' ')[0]; // Format: HH:MM:SS (24-hour)

  console.log('Received expense data:', req.body);

  if (!amount || !category || !date) {
    return res.status(400).json({ error: 'Amount, category, and date are required' });
  }

  const formattedDate = new Date(date).toISOString().split('T')[0]; // YYYY-MM-DD
  const query = 'INSERT INTO expenses (amount, category, date, time) VALUES (?, ?, ?, ?)';
  db.query(query, [amount, category, formattedDate, time], (err, results) => {
    if (err) {
      console.error('Insert error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Expense added successfully' });
  });
});

// Update an expense
app.put('/api/expenses/:id', (req, res) => {
  const { amount, category, date } = req.body;
  const { id } = req.params;

  if (!amount || !category || !date) {
    return res.status(400).json({ error: 'Amount, category, and date are required' });
  }

  const formattedDate = new Date(date).toISOString().split('T')[0];
  const query = 'UPDATE expenses SET amount = ?, category = ?, date = ? WHERE id = ?';
  db.query(query, [amount, category, formattedDate, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Expense updated successfully' });
  });
});

// Delete an expense
app.delete('/api/expenses/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM expenses WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Expense deleted successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
