import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Register from './register';
import Home from './home'; // Main page to show categories
import Dashboard from './dashboard';
import CreatePost from './createposts';
import MyPost from './mypost'; // 
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelPage from './TravelPage';
import EducationPage from './EducationPages';
import MoviesPage from './MoviesPage';  // You will create this
import PoliticsPage from './PoliticsPage';  // You will create this
import EntertainmentPage from './EntertainmentPage';  // You will create this
import TechPage from './TechPage';  
import CategoryPage from './CategoryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createposts" element={<CreatePost />} />
          <Route path="/mypost" element={<MyPost />} /> 
          <Route path="/travel" element={<TravelPage />} />
          <Route path='/education' element={<EducationPage/>}/>
          <Route path="/movies" element={<MoviesPage />} />
        <Route path="/politics" element={<PoliticsPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        
        {/* Example static routes */}
        <Route path="/movies" element={<CategoryPage />} />
        <Route path="/travel" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
