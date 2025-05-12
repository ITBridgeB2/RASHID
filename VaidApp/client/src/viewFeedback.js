import React from 'react';

const FeedbackTable = () => {
  const feedbackData = [
    {
      name: 'Rashid',
      email: 'rashid24razz@gmail.com',
      message: 'Great service, Very helpful and informative.'
    },
    {
      name: 'Rashi',
      email: 'rash@gmail.com',
      message: 'I had a wonderful experience, highly recommend!'
    },
    {
      name: 'Mukthar',
      email: 'muk@gmail.com',
      message: 'Good experience, but the website can be improved.'
    },
    {
      name: 'Raheem',
      email: 'rahee@gmail.com',
      message: 'Good.'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Feedback Submissions</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'left'
            }}
          >
            <th style={{ padding: '12px 15px' }}>Name</th>
            <th style={{ padding: '12px 15px' }}>Email</th>
            <th style={{ padding: '12px 15px' }}>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f1f1f1'}
              onMouseOut={(e) => e.target.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff'}
            >
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {feedback.name}
              </td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {feedback.email}
              </td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {feedback.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
