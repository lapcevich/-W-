import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import DataTable from "./DataTable"; // Импортируем DataTable
import { AppBar, Toolbar } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
            <Link to="/data-table" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Data Table</Link> {/* Добавляем ссылку на DataTable */}
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Login</Link>
            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/data-table" element={<DataTable />} /> {/* Добавляем маршрут для DataTable */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
