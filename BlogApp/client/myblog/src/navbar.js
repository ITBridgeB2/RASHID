import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">BlogApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {['Travel', 'Education', 'Movies', 'Politics', 'Entertainment', 'Tech'].map(cat => (
            <li className="nav-item" key={cat}>
              <Link className="nav-link" to="#">{cat}</Link>
            </li>
          ))}
        </ul>
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link to="/register" className="btn btn-outline-light">Register</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
