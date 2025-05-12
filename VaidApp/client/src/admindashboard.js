import { useNavigate } from "react-router-dom";
import { ClipboardList, Hospital, MessageSquareText, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="text-primary fw-bold">Admin Dashboard</h2>
        <button className="btn btn-outline-danger rounded-pill px-4" onClick={handleLogout}>
          <LogOut className="me-2" size={18} />
          Logout
        </button>
      </div>

      <div className="row g-4">
        {/* View Patient Details */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 text-center p-4 h-100"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <ClipboardList size={40} className="text-primary mb-3" />
            <h5 className="fw-semibold text-dark">View Patient Details</h5>
            <p className="text-muted small">Access full list of registered patients</p>
            <button
              className="btn btn-primary rounded-pill mt-3 px-4"
              onClick={() => navigate("/viewPatientsDetails")}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Add New Hospital */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 text-center p-4 h-100"
            style={{ backgroundColor: "#e8f5e9" }}
          >
            <Hospital size={40} className="text-success mb-3" />
            <h5 className="fw-semibold text-dark">Add New Hospital</h5>
            <p className="text-muted small">Register a new hospital for specific diseases</p>
            <button
              className="btn btn-success rounded-pill mt-3 px-4"
              onClick={() => navigate("/addHospitals")}
            >
              Add Hospital
            </button>
          </div>
        </div>

        {/* Hospital List Button */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 text-center p-4 h-100"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <Hospital size={40} className="text-info mb-3" />
            <h5 className="fw-semibold text-dark">Hospital List</h5>
            <p className="text-muted small">View all registered hospitals and their specialties</p>
            <button
              className="btn btn-info rounded-pill mt-3 px-4"
              onClick={() => navigate("/hospitalList")}
            >
              View Hospitals
            </button>
          </div>
        </div>

        {/* View Feedback */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 text-center p-4 h-100"
            style={{ backgroundColor: "#fff8e1" }}
          >
            <MessageSquareText size={40} className="text-warning mb-3" />
            <h5 className="fw-semibold text-dark">User Feedback</h5>
            <p className="text-muted small">Read suggestions and feedback from users</p>
            <button
              className="btn btn-warning text-dark rounded-pill mt-3 px-4"
              onClick={() => navigate("/viewFeedback")}
            >
              View Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
