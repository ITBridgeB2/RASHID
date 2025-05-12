import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", { email, password });
      alert(res.data);
      navigate("/MainPage");  // 👈 navigate after successful login
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={submit} className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3">Login</h3>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
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
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
