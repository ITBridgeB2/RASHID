import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExpenses();
    fetchTotal();
  }, []);

  const fetchExpenses = () => {
    axios.get('http://localhost:5000/api/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.error('Error fetching expenses:', err));
  };

  const fetchTotal = () => {
    axios.get('http://localhost:5000/api/expenses/total')
      .then(res => {
        if (res.data && res.data.total !== undefined) {
          setTotal(res.data.total);
        } else {
          console.error('Total amount is undefined');
        }
      })
      .catch(err => console.error('Error fetching total:', err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      axios.delete(`http://localhost:5000/api/expenses/${id}`)
        .then(() => {
          fetchExpenses();
          fetchTotal();
        })
        .catch(err => console.error('Error deleting expense:', err));
    }
  };

  const formatDate = (dateTimeString) => {
    return new Date(dateTimeString).toISOString().split('T')[0];
  };

  const formatTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes), parseInt(seconds));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="home-container">
      <style>{`
        .home-container {
          max-width: 1000px;
          margin: auto;
          padding: 30px;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f9fafb;
        }
        .home-title {
          font-size: 32px;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }
        .add-expense-btn {
          display: block;
          margin: 0 auto 20px auto;
          background-color:rgb(69, 42, 169);
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s ease;
        }
        .add-expense-btn:hover {
          background-color:rgb(5, 65, 18);
        }
        .total-box {
          background-color: #e9f7ef;
          border-left: 6px solid #28a745;
          padding: 20px;
          margin-bottom: 30px;
          border-radius: 6px;
          text-align: center;
        }
        .total-subtext {
          color: #555;
          font-size: 14px;
        }
        .list-title {
          font-size: 24px;
          margin-bottom: 15px;
          color: #444;
        }
        .custom-table-wrapper {
          overflow-x: auto;
        }
        .custom-table {
          width: 100%;
          border-collapse: collapse;
          background-color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .custom-table th, .custom-table td {
          padding: 12px 15px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }
        .custom-table th {
          background-color: #343a40;
          color: white;
        }
        .custom-table tr:hover {
          background-color: #f1f1f1;
        }
        .view-btn, .delete-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          margin-right: 6px;
          cursor: pointer;
        }
        .view-btn {
          background-color:rgb(0, 85, 176);
          color: white;
        }
        .view-btn:hover {
          background-color:rgb(0, 30, 62);
        }
        .delete-btn {
          background-color:rgb(201, 45, 60);
          color: white;
        }
        .delete-btn:hover {
          background-color:rgb(79, 0, 8);
        }
        .no-expenses {
          text-align: center;
          font-style: italic;
          color: #888;
          padding: 20px 0;
        }
      `}</style>

      <h1 className="home-title">Expense Tracker Dashboard</h1>

      <button className="add-expense-btn" onClick={() => navigate('/add')}>
         Add New Expense
      </button>

      <div className="total-box">
        <h2>Total Expenses: ₹{total ? total.toFixed(2) : '0.00'}</h2>
        <p className="total-subtext">This is the total sum of all your expenses.</p>
      </div>

      <h3 className="list-title"> Expense List</h3>
      <div className="custom-table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(exp => (
              <tr key={exp.id}>
                <td>{exp.id}</td>
                <td>₹{exp.amount}</td>
                <td>{exp.category}</td>
                <td>{formatDate(exp.date)}</td>
                <td>{formatTime(exp.time)}</td>
                <td>
                  <button className="view-btn" onClick={() => navigate(`/view/${exp.id}`)}>View</button>
                  <button className="delete-btn" onClick={() => handleDelete(exp.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td colSpan="6" className="no-expenses">No expenses found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
