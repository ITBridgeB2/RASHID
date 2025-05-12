import { useState } from "react";
import axios from "axios";

export default function AddHospital({ onHospitalAdded }) {
  const [hospital, setHospital] = useState({
    name: "",
    diseaseType: "",
    contactNumber: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addHospital", hospital)
      .then((res) => {
        alert(res.data);
        setHospital({ name: "", diseaseType: "", contactNumber: "", address: "" });
        onHospitalAdded();  // Notify parent to fetch updated list
      })
      .catch(() => alert("Failed to add hospital"));
  };

  return (
    <div className="container mt-4">
      <h3>Add New Hospital</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Hospital Name"
          value={hospital.name}
          onChange={(e) => setHospital({ ...hospital, name: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Disease Type"
          value={hospital.diseaseType}
          onChange={(e) => setHospital({ ...hospital, diseaseType: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Contact Number"
          value={hospital.contactNumber}
          onChange={(e) => setHospital({ ...hospital, contactNumber: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Address"
          value={hospital.address}
          onChange={(e) => setHospital({ ...hospital, address: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-success w-100">
          Add Hospital
        </button>
      </form>
    </div>
  );
}
