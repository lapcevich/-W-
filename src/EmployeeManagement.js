import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import EmployeeAPI from "./api/service";
import Table from "./Table";
import Form from "./Form";

const initialEmployees = EmployeeAPI.all();

function EmployeeManagement() {
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

export default EmployeeManagement;
