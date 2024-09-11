import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    users: [], //to store registered users
  },
  reducers: {
    register: (state, action) => {
      const newUser = action.payload;
      // Check if user already exists
      const existingUser = state.users.find(
        (user) => user.email === newUser.email
      );
      if (!existingUser) {
        state.users.push(newUser); // Add new user
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      // Find user based on email, & password
      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        state.isAuthenticated = true;
        state.user = existingUser;
      } else {
        alert("Invalid email or password");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
