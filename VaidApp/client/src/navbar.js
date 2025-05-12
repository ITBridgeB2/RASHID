import { Link, useLocation } from "react-router-dom";
import { FaHome, FaPlusCircle, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Inline CSS for styling the Navbar */}
      <style>
        {`
          /* Global Styles */
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s ease;
          }

          /* Navbar Styles */
          .navbar {
            background: linear-gradient(90deg, rgba(28, 40, 51, 1) 0%, rgba(58, 67, 77, 1) 100%); /* Dark blue to grey gradient */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            padding: 1rem;
            transition: background-color 0.3s ease;
            z-index: 9999;
          }

          .navbar .navbar-brand {
            font-size: 1.7rem;
            color: white;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .navbar .navbar-brand:hover {
            color: #00bcd4; /* Light cyan on hover */
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
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
            color: #00bcd4; /* Light cyan on hover */
            transform: scale(1.1);
          }

          .navbar-nav .nav-link:active {
            color: #ff4081; /* Pinkish red when active */
            transition: color 0.1s ease;
          }

          .navbar-collapse {
            justify-content: flex-end;
          }

          /* Responsive Navbar - Center Logo and Links */
          @media (max-width: 767px) {
            .navbar-nav {
              text-align: center;
              margin-top: 10px;
            }

            .navbar-nav .nav-item {
              margin-bottom: 10px;
            }
          }

          /* Hover Effects for Links */
          .navbar-nav .nav-link {
            position: relative;
            display: inline-block;
            overflow: hidden;
          }

          .navbar-nav .nav-link::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.2);
            transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .navbar-nav .nav-link:hover::after {
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
          }

          /* Logo Hover Animation */
          .navbar-brand:hover {
            color: #00bcd4;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold" to="/">
            <FaHome /> Vaidyakiya Sahayaka
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/about">
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/contact">
                  <FaPhoneAlt /> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/register">
                  <FaPlusCircle /> Register
                </Link>
              </li>

              {/* Conditionally render Logout button */}
              {location.pathname !== "/" && (
                <li className="nav-item">
                  <Link className="nav-link text-white px-3" to="/logout">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
