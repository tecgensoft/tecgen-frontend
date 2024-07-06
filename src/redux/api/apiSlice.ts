// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // export const api = createApi({
// //   reducerPath: "api",
// //   baseQuery: fetchBaseQuery({
// //     baseUrl: import.meta.env.VITE_BASE_URL,
// //     // prepareHeaders: (headers, { getState }) => {
// //     //   const token = (getState() as { auth: { userToken: string } }).auth.userToken;
// //     //   if (token) {
// //     //     // include token in req header
// //     //     headers.set("authorization", `Bearer ${token}`);
// //     //   }
// //     //   return headers;
// //     // },
// //   }),
// //   tagTypes: ["order", "user"],
// //   endpoints: () => ({}),
// // });
// // Import necessary libraries
// import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axios, { AxiosError } from "axios";
// // import { setCookie } from "../../utility/cookies/cookies.auth";
// import { setCookie } from "../../utility/cookies/cookies.auth";
// import { getUserData } from "../../utility/getUser";
// import { logout, setNewAccessToken, setUserInfo } from "../feature/auth/authSlice";
// import { userLogout } from "../feature/auth/authAction";

// // Your existing code...

// // Define the base query function with token refresh logic
// const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
//   try {
//     // Perform the actual HTTP request
//     const result = await fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })(args, api, extraOptions);

//     if (result?.error?.status === 401) {
//       // Perform token refresh
//       const refreshToken = localStorage.getItem("refreshToken");
//       // api.dispatch(logout());
//       if (refreshToken) {
//         try {
//           const refreshResult = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/public/refresh_token`, {
//             refresh_token: refreshToken,
//           });
//           // Update the new access token in your state or wherever it is stored
//           api.dispatch(setNewAccessToken(refreshResult?.data?.data?.access_token));
//           const user = getUserData(refreshResult?.data?.data?.access_token);
//           api.dispatch(setUserInfo(user?.username));
//           if (user) {
//             setCookie("userToken", refreshResult?.data?.data?.access_token, user?.exp);
//             setCookie("userInfo", user?.username, user?.exp);
//             localStorage.setItem("refreshToken", refreshResult?.data?.data?.refresh_token);
//           }
//           // Retry the original request with the new access token
//           return await fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })(args, api, extraOptions);
//         } catch (refreshError) {
//           // Handle refresh error (e.g., logout user)
//           userLogout();
//           api.dispatch(logout());
//           throw refreshError;
//         }
//       } else {
//         // Handle missing refresh token (e.g., logout user)
//         userLogout();
//         api.dispatch(logout());
//         // throw new Error("Missing refresh token");
//       }
//     }
//     return result;
//     // Adjust the type of 'data' to string
//     // return { ...result, data: result.data as string };
//   } catch (error) {
//     const err = error as AxiosError;

//     // If the error is not a 401, rethrow it
//     throw err;
//   }
// };

// // Your existing code...

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery,
//   tagTypes: ["order", "user", "review", "address"],
//   endpoints: () => ({}),
// });
