import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import DataTable from "./DataTable";
import Home from "./Home";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/data-table" element={<DataTable />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
