// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { IVerification } from "../../../pages/contactConfirmation/types";
// import { ISigninFormData } from "../../../pages/signin/types";
// import { ISignupFormData } from "../../../pages/signup/types";
// import { getCookie, setCookie, setTemporalCookie } from "../../../utility/cookies/cookies.auth";
// import { getUserData } from "../../../utility/getUser";

// interface IResend {
//   username: string;
//   // otp_type: string;
// }
// const backendURL = import.meta.env.VITE_BASE_URL;

// // safia
// // export const registerUser = createAsyncThunk(
// //   "auth/register",
// //   async (
// //     {
// //       // first_name, last_name,
// //       full_name,
// //       password,
// //       username,
// //     }: ISignupFormData,
// //     { rejectWithValue }
// //   ) => {
// //     try {
// //       const config = {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       };
// //       await axios.post(
// //         `${backendURL}/users/public`,
// //         {
// //           // first_name, last_name,
// //           first_name: full_name,
// //           password,
// //           username,
// //         },
// //         config
// //       );

// //       setTemporalCookie("registeredUser", username, 3600);

// //       return username;
// //     } catch (error) {
// //       const castedError = error as any;

// //       if (castedError.response && castedError.response.data?.message) {
// //         return rejectWithValue(castedError.response.data?.message);
// //       }
// //       return rejectWithValue(castedError.message);
// //     }
// //   }
// // );
// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async ({ full_name, password, username }: ISignupFormData, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       await axios.post(`${backendURL}/users/public/send-verification-otp `, { username }, config);
//       setTemporalCookie("registeredUser", { full_name, username, password }, 3600);

//       return username;
//     } catch (error) {
//       const castedError = error as any;

//       if (castedError.response && castedError.response.data?.message) {
//         return rejectWithValue(castedError.response.data?.message);
//       }
//       return rejectWithValue(castedError.message);
//     }
//   }
// );

// // safia
// // export const verificationContact = createAsyncThunk("auth/verify", async ({ username, otp }: IVerification, { rejectWithValue }) => {
// //   try {
// //     const config = {
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     };
// //     // const { username, otp } = formData;
// //     const { data } = await axios.patch(`${backendURL}/users/public/login`, { username, otp }, config);
// //     const userInfo = getUserData(data?.data?.access_token);
// //     // console.log("here");
// //     if (userInfo && username) {
// //       localStorage.setItem("refreshToken", data?.data?.refresh_token);
// //       setCookie("userToken", data?.data?.access_token, userInfo?.exp);
// //       setCookie("userInfo", username, userInfo?.exp);

// //       data.username = username;
// //       // console.log("from Login", data);
// //       return data;
// //     }
// //     return data;
// //   } catch (error) {
// //     const castedError = error as any;
// //     if (castedError.response && castedError?.response?.data?.details[0]) {
// //       return rejectWithValue(castedError?.response?.data?.details[0]);
// //     }
// //     return rejectWithValue(castedError?.message);
// //   }
// // });
// export const verificationContact = createAsyncThunk(
//   "auth/verify",
//   async ({ username, first_name, password, otp }: IVerification, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(`${backendURL}/users/public/verify-and-sign-up`, { username, first_name, password, otp }, config);
//       const userInfo = getUserData(data?.data?.access_token);
//       if (userInfo && username && first_name && password && otp) {
//         localStorage.setItem("refreshToken", data?.data?.refresh_token);
//         setCookie("userToken", data?.data?.access_token, userInfo?.exp);
//         setCookie("userInfo", username, userInfo?.exp);
//         data.username = username;
//         return data;
//       }
//       return data;
//     } catch (error) {
//       const castedError = error as any;
//       const details = castedError?.response?.data?.details;
//       if (castedError) {
//         return rejectWithValue(Object.values(details || {})[0]);
//       }
//       return rejectWithValue(castedError?.message);
//     }
//   }
// );

// // safia
// // export const resendOtp = createAsyncThunk("auth/resendOtp", async ({ username }: IResend, { rejectWithValue }) => {
// //   try {
// //     const config = {
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     };
// //     const { data } = await axios.post(`${backendURL}/users/public/resend-otp`, { username, otp_type: "login" }, config);
// //     // Handle the response and update the state or perform other actions as needed
// //     return data;
// //   } catch (error) {
// //     const castedError = error as any;

// //     if (castedError.response && castedError.response.data?.details[0]) {
// //       return rejectWithValue(castedError.response.data?.details[0]);
// //     }
// //     return rejectWithValue(castedError.message);
// //   }
// export const resendOtp = createAsyncThunk("auth/resendOtp", async ({ username }: IResend, { rejectWithValue }) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(`${backendURL}/users/public/send-verification-otp`, { username }, config);
//     // Handle the response and update the state or perform other actions as needed
//     return data;
//   } catch (error) {
//     const castedError = error as any;

//     if (castedError.response && castedError.response.data?.details[0]) {
//       return rejectWithValue(castedError.response.data?.details[0]);
//     }
//     return rejectWithValue(castedError.message);
//   }
// });

// export const userLogin = createAsyncThunk("auth/login", async (formData: ISigninFormData, { rejectWithValue }) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { username, password } = formData;
//     const userData = {
//       username,
//       password,
//     };
//     const { data } = await axios.post(`${backendURL}/users/admin/login-with-password`, { ...userData }, config);

//     const userInfo = getUserData(data?.data?.access_token);
//     if (userInfo) {
//       localStorage.setItem("refreshToken", data?.data?.refresh_token);
//       setCookie("userToken", data?.data?.access_token, userInfo?.exp);
//       setCookie("userInfo", username, userInfo?.exp);
//       data.username = username;
//       return data;
//     }
//     // if (data && data?.success) {
//     //   setTemporalCookie("registeredUser", username, 3600);
//     //   return data;
//     // }
//     // Handle the case where userInfo is null or undefined
//     return rejectWithValue("User info is null or undefined");
//   } catch (error) {
//     const castedError = error as any;
//     if (castedError.response && castedError.response.data?.details[0]) {
//       return rejectWithValue(castedError.response.data?.details[0]);
//     }
//     return rejectWithValue(castedError.message);
//   }
// });

// export const userLogout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${getCookie("userToken")}`,
//       },
//     };

//     // Make a request to logout endpoint
//     const { data } = await axios.post(`${backendURL}/users/public/logout/`, null, config);
//     // Handle the response, clear any stored tokens or user information
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userInfo");

//     // Optionally, perform any other actions as needed

//     return data;
//   } catch (error) {
//     // Handle any errors
//     const castedError = error as any;

//     if (castedError.response && castedError.response.data?.message) {
//       return rejectWithValue(castedError.response.data?.message);
//     }

//     return rejectWithValue(castedError.message);
//   }
// });
