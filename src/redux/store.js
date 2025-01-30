
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import loanRecordsReducer from './slices/loanRecordsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    loanRecords: loanRecordsReducer,
    users: usersReducer,
  },
});

export default store;
