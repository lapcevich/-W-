import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext, AuthProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import EmployeeManagement from "./EmployeeManagement"; // Импорт компонента
import { addEmployee, deleteEmployee } from './features/employeesSlice';
import { AppBar, Toolbar } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);

  const delEmp = (id) => {
    dispatch(deleteEmployee(id));
  };

  const addEmp = (employee) => {
    dispatch(addEmployee(employee));
  };

  return (
    <AuthProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
            <Link to="/employee-management" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Employee Management</Link>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Login</Link>
            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee-management" element={<PrivateRoute><EmployeeManagement /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
