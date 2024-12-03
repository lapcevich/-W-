import { createSlice } from '@reduxjs/toolkit';
import EmployeeAPI from "../api/service";

const initialState = EmployeeAPI.all();

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = EmployeeAPI.add(action.payload);
      if (newEmployee) {
        state.push(newEmployee);
      }
    },
    deleteEmployee: (state, action) => {
      const id = action.payload;
      if (EmployeeAPI.delete(id)) {
        return state.filter(employee => employee.id !== id);
      }
    }
  }
});

export const { addEmployee, deleteEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
