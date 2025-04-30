import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersList.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(
        (user, index) => index !== action.payload
      );
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;