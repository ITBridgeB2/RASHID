import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getAllPatients")
      .then(res => setData(res.data))
      .catch(err => console.error("Error loading dashboard:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Registered Patients & Recommended Hospitals</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark text-white">
            <tr>
              <th>Patient Name</th>
              <th>Disease Type</th>
              <th>Hospital Name</th>
              <th>Hospital Contact</th>
              <th>Hospital Address</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No records found</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.patientName}</td>
                  <td>{row.diseaseType}</td>
                  <td>{row.hospitalName}</td>
                  <td>{row.hospitalContact}</td>
                  <td>{row.hospitalAddress}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
