import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const Form = ({ handleSubmit, inEmployee }) => {
  const [employee, setEmployee] = useState(inEmployee);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(employee);
    setEmployee(inEmployee);
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField label="Name" type="text" name="name" value={employee.name} onChange={handleChange} required />
      <TextField label="Job" type="text" name="job" value={employee.job} onChange={handleChange} required />
      <Button type="submit" variant="contained" color="primary" aria-label="Add Employee">Add</Button>
    </Box>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inEmployee: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
  }).isRequired,
};

export default Form;
