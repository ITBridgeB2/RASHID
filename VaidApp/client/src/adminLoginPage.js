import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/admin-login", { email, password });
      alert(res.data); // Login successful message
      // Redirect to the admin dashboard
      navigate("/admindashboard"); // Use navigate to redirect to the admin dashboard route
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={submit} className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3">Admin Login</h3>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-dark w-100">Login as Admin</button>
      </form>
    </div>
  );
}
