import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewPatientDetails() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/patientDetails")
      .then((res) => setPatients(res.data))
      .catch((err) => console.error("Failed to fetch patients:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">All Patient Details</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Type</th>
              <th>Aadhar</th>
              <th>Address</th>
              <th>Taluk</th>
              <th>Disease</th>
              <th>Duration</th>
              <th>Symptoms</th>
              <th>Assistant Name</th>
              <th>Relation</th>
              <th>Assistant Phone</th>
              
            </tr>
          </thead>
          <tbody>
            {patients.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.mobile}</td>
                <td>{p.dob}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.bloodType}</td>
                <td>{p.aadhar}</td>
                <td>{p.address}</td>
                <td>{p.taluk}</td>
                <td>{p.diseaseType}</td>
                <td>{p.diseaseDuration}</td>
                <td>{p.symptoms}</td>
                <td>{p.assistantName}</td>
                <td>{p.relationToPatient}</td>
                <td>{p.assistantTelno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
