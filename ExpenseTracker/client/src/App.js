import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import AddExpenses from './addExpense';
import ViewExpense from './viewExpense';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpenses />} />
        <Route path="/view/:id" element={<ViewExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
