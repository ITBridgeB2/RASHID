import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddExpenses = () => {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category || !formData.date) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/expenses', formData);
      alert('Expense added successfully');
      navigate('/'); // Go back to home
    } catch (error) {
      console.error('Error adding expense:', error.message);
      alert('Failed to add expense');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Expense</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddExpenses;
