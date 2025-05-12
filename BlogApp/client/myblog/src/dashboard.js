// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="dashboard-container mt-5 text-center">
      <h2 className="mb-4">Dashboard</h2>
      <Row className="justify-content-center">
        <Col md={3}>
          <div className="card custom-card" onClick={() => navigate('/createposts')}>
            <div className="card-body">
              <h5 className="card-title">Create Post</h5>
              <Button variant="light" className="w-100">Create a New Blog</Button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card custom-card" onClick={() => navigate('/mypost')}>
            <div className="card-body">
              <h5 className="card-title">My Posts</h5>
              <Button variant="light" className="w-100">View My Blogs</Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Embedded CSS */}
      <style jsx>{`
        .dashboard-container {
          background-color: #e9f7fc; /* Light pastel blue background */
          padding: 20px;
          border-radius: 8px;
        }

        .custom-card {
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
        }

        .card-body {
          padding: 25px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #3d3d3d; /* Dark grey for readability */
          margin-bottom: 15px;
        }

        button {
          border-radius: 8px;
          font-size: 1rem;
          padding: 12px;
          transition: background 0.3s ease;
        }

        button:hover {
          background-color: #dce7f1; /* Soft light blue on hover */
        }

        h2 {
          font-size: 2rem;
          color: #3c7c8b; /* Light teal color */
          margin-bottom: 30px;
        }

        button:focus {
          outline: none;
        }

        .card-header {
          background-color: #f7fafb; /* Very light gray for the header */
          color: #6c757d;
        }
      `}</style>
    </Container>
  );
};

export default Dashboard;
