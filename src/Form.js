import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        value={employee.job}
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add Employee">Add</button>
    </form>
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
