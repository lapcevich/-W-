// redux/slices/loanRecordsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLoanRecords = createAsyncThunk('loanRecords/fetchLoanRecords', async () => {
  const response = await axios.get('http://localhost:8088/api/loans');
  return response.data;
});

const loanRecordsSlice = createSlice({
  name: 'loanRecords',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    issueBook: (state, action) => {
      state.items.push(action.payload);
    },
    returnBook: (state, action) => {
      const index = state.items.findIndex(record => record.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoanRecords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoanRecords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchLoanRecords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { issueBook, returnBook } = loanRecordsSlice.actions;

export default loanRecordsSlice.reducer;
