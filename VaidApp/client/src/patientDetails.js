import { useLocation, useNavigate } from "react-router-dom";

export default function PatientDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.patient || !state?.hospital) {
    return <div className="container mt-5"><h4>No data to display.</h4></div>;
  }

  const { patient, hospital } = state;

  return (
    <div className="container mt-4">
      <h2>Patient Registered Successfully</h2>
      <div className="card p-4 mt-4">
        <h5>Patient Information:</h5>
        <ul className="list-group mb-4">
          {Object.entries(patient).map(([key, value]) => (
            <li key={key} className="list-group-item">
              <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>{value}
            </li>
          ))}
        </ul>
        <h2>Recommended Hospital:</h2>
        <p><strong>Hospital Name:</strong> {hospital.name}</p>
        <p><strong>Contact:</strong> {hospital.contact}</p>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
          Back to Registration
        </button>
      </div>
    </div>
  );
}
