import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Box } from "@mui/material";

const DataTable = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ben Blocker", job: "Teacher" },
    { id: 2, name: "Dave Defender", job: "Student" },
    { id: 3, name: "Sam Sweeper", job: "Teacher" },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: "", job: "" });

  const handleAddEmployee = () => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 1;
    setEmployees([...employees, { id, ...newEmployee }]);
    setNewEmployee({ name: "", job: "" });
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <TextField
          label="Job"
          value={newEmployee.job}
          onChange={(e) => setNewEmployee({ ...newEmployee, job: e.target.value })}
        />
        <Button onClick={handleAddEmployee} variant="contained" color="primary">Add Employee</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.job}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteEmployee(employee.id)} color="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
