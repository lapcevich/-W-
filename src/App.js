import React, { useState } from "react";
import "./App.css";
import EmployeeAPI from "./api/service";
import Table from "./Table";
import Form from "./Form";
import { Container, Typography } from "@mui/material";

const initialEmployees = EmployeeAPI.all();

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const delEmp = (id) => {
    if (EmployeeAPI.delete(id)) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  const addEmployee = (employee) => {
    const newEmployee = EmployeeAPI.add(employee);
    if (newEmployee) {
      setEmployees([...employees, newEmployee]);
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Employee Management</Typography>
      <Form handleSubmit={addEmployee} inEmployee={{ name: "", job: "" }} />
      <Table employees={employees} delEmployee={delEmp} />
    </Container>
  );
}

export default App;
