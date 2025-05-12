import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/expenses/${id}`)
      .then(res => {
        const { amount, category, date, time } = res.data;
        setExpense(res.data);
        setFormData({
          amount,
          category,
          date: date.split('T')[0] // Show only date part
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this expense?')) return;
    axios.delete(`http://localhost:5000/api/expenses/${id}`)
      .then(() => {
        alert('Expense deleted successfully');
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/expenses/${id}`, formData)
      .then(() => {
        alert('Expense updated successfully');
        setEditing(false);
        // Update displayed data too
        setExpense(prev => ({
          ...prev,
          ...formData,
          time: prev.time, // keep original time
        }));
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={styles.container}>
      {expense ? (
        <div style={styles.card}>
          <h2 style={styles.heading}>Expense Details</h2>
          {editing ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                style={styles.input}
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                style={styles.input}
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={styles.input}
              />
              <button type="submit" style={styles.saveButton}>Save</button>
            </form>
          ) : (
            <div style={styles.info}>
              <p><strong>Amount:</strong> ₹{expense.amount}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Date:</strong> {expense.date.split('T')[0]}</p>
              <p><strong>Time:</strong> {expense.time}</p>
            </div>
          )}
          <div style={styles.actions}>
            <button onClick={() => setEditing(!editing)} style={styles.editButton}>
              {editing ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={handleDelete} style={styles.deleteButton}>Delete</button>
          </div>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fdfdfd',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  info: {
    lineHeight: '1.8',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  saveButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  actions: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#888',
  }
};

export default ViewExpense;
