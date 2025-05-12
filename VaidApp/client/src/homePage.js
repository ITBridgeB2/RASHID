import { useNavigate } from "react-router-dom";
import { FaUser, FaUserShield, FaUserPlus } from "react-icons/fa";
import Navbar from "./navbar"; // Ensure path is correct

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Inline CSS for HomePage Styles */}
      <style>
        {`
          /* Global Styles */
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 255, 85, 0.2) 100%), url('https://images.unsplash.com/photo-1596524553866-64d30c05d8d9') no-repeat center center fixed;
            background-size: cover;
            transition: background-color 0.3s ease;
            color: #343a40;
          }

          /* Navbar Styles */
          .navbar {
            background: linear-gradient(90deg, rgba(0, 45, 108, 1) 0%, rgba(4, 148, 218, 1) 100%); /* Deep blue gradient */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 1rem;
            transition: background-color 0.3s ease;
            z-index: 9999;
          }

          .navbar .navbar-brand {
            font-size: 1.8rem;
            color: white;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .navbar .navbar-brand:hover {
            color: #ffeb3b; /* Lighter yellow on hover */
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
          }

          .navbar-toggler {
            border-color: #fff;
          }

          .navbar-toggler-icon {
            background-color: #fff;
          }

          .navbar-nav .nav-item {
            padding: 0 1rem;
          }

          .navbar-nav .nav-link {
            font-weight: 500;
            color: white;
            transition: color 0.3s ease, transform 0.3s ease;
            position: relative;
          }

          .navbar-nav .nav-link:hover {
            color: #ffeb3b; /* Bright yellow on hover */
            transform: scale(1.1);
          }

          .navbar-nav .nav-link:active {
            color: #ff7e5f;
            transition: color 0.1s ease;
          }

          .navbar-collapse {
            justify-content: flex-end;
          }

          /* HomePage Card Styles */
          .card {
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 30px;
            max-width: 500px;
            width: 100%;
            margin-top: 120px;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }

          .card h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
          }

          .card button {
            font-size: 1.1rem;
            padding: 12px 20px;
            border-radius: 10px;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card button:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          /* Button Styles */
          .btn-outline-primary {
            border-color: #007bff;
            color: #007bff;
            transition: all 0.3s ease;
          }

          .btn-outline-primary:hover {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          .btn-outline-dark {
            border-color: #343a40;
            color: #343a40;
            transition: all 0.3s ease;
          }

          .btn-outline-dark:hover {
            background-color: #343a40;
            color: white;
            border-color: #343a40;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          .btn-outline-success {
            border-color: #28a745;
            color: #28a745;
            transition: all 0.3s ease;
          }

          .btn-outline-success:hover {
            background-color: #28a745;
            color: white;
            border-color: #28a745;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          /* About Us Section */
          .container#about {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 30px 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            max-width: 900px;
            margin: 30px auto;
          }

          .container#about p {
            text-align: center;
            font-size: 1.2rem;
            color: #6c757d;
            line-height: 1.6;
          }
        `}
      </style>

      {/* Navbar Component */}
      <Navbar />

      {/* Main Welcome Section */}
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card p-5 shadow-lg"
          style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }}
        >
          <h2 className="text-center mb-4 fw-bold text-primary">
            Welcome to <span className="text-dark">Vaidyakiya Sahayaka</span>
          </h2>

          <button
            className="btn btn-outline-primary btn-lg w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/login")}
          >
            <FaUser /> User Login
          </button>

          <button
            className="btn btn-outline-dark btn-lg w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/admin-login")}
          >
            <FaUserShield /> Admin Login
          </button>

          <button
            className="btn btn-outline-success btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/register")}
          >
            <FaUserPlus /> Register
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mt-5" id="about">
        <p className="text-muted">
          VaidApp is a health-tech platform that connects patients to the right
          medical care based on their conditions. Fast, secure, and smart
          healthcare assistant.
        </p>
      </div>
    </>
  );
}
