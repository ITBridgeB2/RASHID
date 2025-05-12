import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaTachometerAlt, FaCommentDots, FaSignOutAlt } from "react-icons/fa";

export default function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
        style={{ background: "#1e1f5e" }}
      >
        <div className="container">
          <span className="navbar-brand fw-bold fs-3">VaidApp</span>
          <button
            className="btn btn-outline-light ms-auto d-flex align-items-center px-3 py-2"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(to right, #f3f9ff, #dbeafe)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="d-flex flex-column align-items-center gap-5"
          style={{ maxWidth: "1000px", width: "100%" }}
        >
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {/* Register Patient Box */}
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center p-4"
              style={{
                width: "220px",
                height: "220px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(102, 126, 234, 0.4)",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => navigate("/registerPatient")}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaUserPlus size={48} className="mb-3" />
              <div className="fw-semibold fs-5">Register Patient</div>
            </div>

            {/* Dashboard Box */}
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center p-4"
              style={{
                width: "220px",
                height: "220px",
                background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                color: "white",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(56, 239, 125, 0.4)",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => navigate("/dashboard")}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaTachometerAlt size={48} className="mb-3" />
              <div className="fw-semibold fs-5">Dashboard</div>
            </div>

            {/* Feedback Box */}
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center p-4"
              style={{
                width: "220px",
                height: "220px",
                background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
                color: "white",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(255, 126, 95, 0.4)",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => navigate("/userFeedback")}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaCommentDots size={48} className="mb-3" />
              <div className="fw-semibold fs-5">Feedback</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
