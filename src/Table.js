import React from "react";
import PropTypes from "prop-types";

const Table = ({ employees, delEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>
              <button onClick={() => delEmployee(employee.id)} aria-label={`Delete ${employee.name}`}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
