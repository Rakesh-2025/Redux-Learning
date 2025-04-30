import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slices/user_slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});



