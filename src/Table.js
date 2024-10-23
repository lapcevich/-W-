import React from "react";
import PropTypes from "prop-types";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const Table = ({ employees, delEmployee }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.job}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => delEmployee(employee.id)} aria-label={`Delete ${employee.name}`}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
    })
  ).isRequired,
  delEmployee: PropTypes.func.isRequired,
};

export default Table;
