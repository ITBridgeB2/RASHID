import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password match validation
    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:3001/register", form);
      alert(res.data);
    } catch (err) {
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3">Register</h3>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          required
        />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
