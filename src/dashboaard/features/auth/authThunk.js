// // authThunk.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { loginAPI, registerAPI } from "./authAPI";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await loginAPI(credentials);
//       return response.data; // Expecting { user, token } from API
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await registerAPI(credentials);
//       return response.data; // Expecting { user, token } from API
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

// // import { createAsyncThunk } from "@reduxjs/toolkit";
// // import { loginAPI, registerAPI } from "./authAPI";

// // // Login thunk
// // export const loginUser = createAsyncThunk(
// //   "auth/loginUser",
// //   async (credentials, { rejectWithValue }) => {
// //     try {
// //       const response = await loginAPI(credentials);
// //       return response.data; // Expecting { user, token } from API
// //     } catch (error) {
// //       return rejectWithValue(error.response.data.message);
// //     }
// //   }
// // );

// // // Register thunk
// // export const registerUser = createAsyncThunk(
// //   "auth/registerUSer",
// //   async (credentials, { rejectWithValue }) => {
// //     try {
// //       const response = await registerAPI(credentials);
// //       return response.data; // Expecting { user, token } from API
// //     } catch (error) {
// //       return rejectWithValue(error.response.data.message);
// //     }
// //   }
// // );
