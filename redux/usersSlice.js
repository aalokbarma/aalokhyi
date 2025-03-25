import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    currUser: {},
  },
  reducers: {
    fetchUsersStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createUserSuccess: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserSuccess: (state, action) => {
      const index = state.users.findIndex(
        user => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    fetchCurrentUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload);
      state.currUser = state.users[index];
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  fetchCurrentUser,
} = usersSlice.actions;

export default usersSlice.reducer;
