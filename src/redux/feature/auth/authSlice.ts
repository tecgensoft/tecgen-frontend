// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable no-param-reassign */
// import { createSlice } from "@reduxjs/toolkit";
// import { getCookie } from "../../../utility/cookies/cookies.auth";
// import { registerUser, userLogin, verificationContact } from "./authAction";

// interface AuthState {
//   loading: boolean;
//   userInfo: string | null;
//   userToken: string | null;
//   refreshToken: string | null;
//   error: string | null;
//   success: boolean;
//   confirmOtp: boolean;
//   loginSuccess: boolean;
//   registeredUser: string | null;
//   loginError: string | null;
//   confirmContactSuccess: boolean;
//   confirmContactError: string | null;
//   notificationSuccess: boolean;
//   userAllInfo: any;
// }

// const userToken = getCookie("userToken") ?? null;
// const refreshToken = localStorage.getItem("refreshToken") ?? null;
// const userInfo = getCookie("userInfo") ?? null;
// const registeredUser = getCookie("registerUser") ?? null;

// const initialState: AuthState = {
//   loading: false,
//   userInfo,
//   userToken,
//   refreshToken,
//   error: null,
//   loginError: null,
//   loginSuccess: false,
//   success: false,
//   confirmOtp: false,
//   confirmContactSuccess: false,
//   confirmContactError: null,
//   registeredUser,
//   notificationSuccess: false,
//   userAllInfo: undefined,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: () => {
//       return {
//         ...initialState,
//         userInfo: null,
//         userToken: null,
//         userAllInfo: undefined,
//       };
//     },
//     setConfirmOtp: (state, action) => {
//       state.confirmOtp = action.payload;
//     },
//     setSuccess: (state, action) => {
//       state.success = action.payload;
//     },
//     setNewAccessToken: (state, action) => {
//       state.userToken = action.payload;
//     },
//     setUserInfo: (state, action) => {
//       state.userInfo = action.payload;
//     },
//     setNotification: (state, action) => {
//       state.notificationSuccess = action.payload;
//     },
//     setLoginSuccess: (state, action) => {
//       state.loginSuccess = action.payload;
//     },
//     setUserAllInfo: (state, action) => {
//       state.userAllInfo = action.payload;
//     },
//     setLoginError: (state, action) => {
//       state.loginError = action.payload;
//     },
//     setOtpError: (state, action) => {
//       state.confirmContactError = action.payload;
//     },
//     setSignupError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(userLogin.pending, (state) => {
//         state.loading = true;
//         state.loginError = null;
//         state.confirmContactError = null;
//       })
//       .addCase(userLogin.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.userInfo = payload?.username;
//         state.userToken = payload?.data?.access_token;
//         state.loginSuccess = true;
//         state.loginError = null;
//         state.confirmContactError = null;
//       })
//       .addCase(userLogin.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.loginError = payload as string | null;
//         state.confirmContactError = null;
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.loginError = null;
//         state.confirmContactError = null;
//       })
//       .addCase(registerUser.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.success = true; // registration successful
//         state.registeredUser = payload;
//         state.error = null;
//         state.loginError = null;
//         state.confirmContactError = null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string | null;
//         state.loginError = null;
//         state.confirmContactError = null;
//       })
//       .addCase(verificationContact.pending, (state) => {
//         state.loading = true;
//         state.confirmContactError = null;
//         state.loginError = null;
//       })
//       .addCase(verificationContact.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.confirmOtp = true; // registration successful
//         state.userInfo = payload?.username;
//         state.userToken = payload?.data?.access_token;
//         state.confirmContactSuccess = true;
//         state.confirmContactError = null;
//         state.loginError = null;
//       })
//       .addCase(verificationContact.rejected, (state, action) => {
//         state.loading = false;
//         state.confirmContactSuccess = false;
//         state.confirmContactError = action.payload as string | null;
//         state.loginError = null;
//       });
//   },
// });

// export const {
//   logout,
//   setConfirmOtp,
//   setSuccess,
//   setNewAccessToken,
//   setUserInfo,
//   setNotification,
//   setLoginSuccess,
//   setUserAllInfo,
//   setLoginError,
//   setOtpError,
//   setSignupError,
// } = authSlice.actions;

// export default authSlice.reducer;
