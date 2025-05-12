import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPatient() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", mobile: "", dob: "", age: "", gender: "", bloodType: "", aadhar: "",
    address: "", taluk: "", diseaseDuration: "", symptoms: "", diseaseType: "",
    assistantName: "", relationToPatient: "", assistantTelno: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/registerPatient", form);
      alert(res.data.message);

      navigate("/patient-details", {
        state: {
          patient: form,
          hospital: {
            name: res.data.hospitalName,
            contact: res.data.contactNumber,
          }
        }
      });

      // Optionally clear form after navigation
    } catch (err) {
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit} className="card p-4 mt-3">

        {/* Patient Fields */}
        {[
          { name: "name", label: "Name" },
          { name: "mobile", label: "Mobile" },
          { name: "dob", label: "Date of Birth", type: "date" },
          { name: "age", label: "Age", type: "number" },
          { name: "bloodType", label: "Blood Type" },
          { name: "aadhar", label: "Aadhar Number" },
          { name: "address", label: "Address" },
          { name: "taluk", label: "Taluk" },
          { name: "diseaseDuration", label: "Disease Duration" },
          { name: "symptoms", label: "Symptoms" },
        ].map((field, i) => (
          <div key={i} className="mb-3">
            <label className="form-label">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}

        {/* Gender Dropdown */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Disease Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Disease Type</label>
          <select
            name="diseaseType"
            value={form.diseaseType}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Disease Type</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>

        {/* Assistant Details */}
        <h5 className="mt-4">Assistant Details</h5>
        {[
          { name: "assistantName", label: "Assistant Name" },
          { name: "relationToPatient", label: "Relation to Patient" },
          { name: "assistantTelno", label: "Assistant Phone Number" },
        ].map((field, i) => (
          <div key={i} className="mb-3">
            <label className="form-label">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}

        <button className="btn btn-primary w-100" type="submit">Register Patient</button>
      </form>
    </div>
  );
}
