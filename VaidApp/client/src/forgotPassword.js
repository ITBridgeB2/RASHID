import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/forgot-password", { email });
      alert(res.data);
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3">Forgot Password</h3>
        <input className="form-control mb-3" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required />
        <button className="btn btn-warning w-100">Send Reset Link</button>
      </form>
    </div>
  );
}
