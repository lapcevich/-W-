import React from "react";
import { Container, Typography } from "@mui/material";
import Table from "./Table";
import Form from "./Form";

function EmployeeManagement({ employees, delEmp, addEmp }) {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Employee Management</Typography>
      <Form handleSubmit={addEmp} inEmployee={{ name: "", job: "" }} />
      <Table employees={employees} delEmployee={delEmp} />
    </Container>
  );
}

export default EmployeeManagement;
