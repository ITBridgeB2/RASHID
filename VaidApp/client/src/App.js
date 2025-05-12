import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import LoginPage from "./loginPage";
import AdminLoginPage from "./adminLoginPage";
import RegisterPage from "./registerPage";
import RegisterPatient from "./registerPatient";
import PatientDetails from "./patientDetails";
import Dashboard from "./dashboard";
import MainPage from "./MainPage";
import AdminDashboard from "./admindashboard";
import ViewPatientDetails from "./viewPatientsDetails";
import AddHospital from "./addHospitals";
import UserFeedback from "./userFeedback";
import ViewFeedback from "./viewFeedback";
import HospitalList from "./hospitalList";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerPatient" element={<RegisterPatient />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/viewPatientsDetails" element={<ViewPatientDetails />} />
        <Route path="/addHospitals" element={<AddHospital />} />
        <Route path="/userFeedback" element={<UserFeedback />} />
<Route path="/viewFeedback" element={<ViewFeedback />} />
<Route path="/hospitalList" element={<HospitalList />} />

      </Routes>
    </Router>
  );
}

export default App;
