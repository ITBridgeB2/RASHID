import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Using useNavigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post('/api/feedback/submit', { name, email, message });

      if (response.status === 200) {
        alert('Feedback submitted successfully!');
        navigate('/mainPage');  // Navigate to MainPage.js after successful submission
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Submit Feedback</h3>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
