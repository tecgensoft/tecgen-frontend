/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData } from "../../../utility/getUser";
import {
  clearTokens,
  setTokens,
} from "../../../utility/localStorage/local.auth";
import { userLogin, userSignup } from "./authSlice";

export interface IInitialState {
    loading: boolean;
    userInfo: any;
    userToken: string | null;
    error: string | null;
    success: boolean;
}

const initialState: IInitialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
            state.success = false;
            clearTokens();
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.userToken = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.userInfo = null;
            state.error = null;
            state.success = false;
        });
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            // set token in local storage
            setTokens(payload.access_token, payload.refresh_token);
            const user = getUserData(payload.access_token);
            state.loading = false;
            state.success = true;
            state.error = null;
            state.userToken = payload.access_token;
            state.userInfo = user;
        });
        builder.addCase(userLogin.rejected, (state, { payload }) => {
          console.log(payload)
            state.loading = false;
            state.success = false;
            state.error = payload as string | null;
        });
        builder.addCase(userSignup.pending, (state) => {
            state.loading = true;
            state.userInfo = null;
            state.error = null;
            state.success = false;
        });
        builder.addCase(userSignup.fulfilled, (state, { payload }) => {
            const { access_token, refresh_token } = payload;
            // Decode access token
            const userData = getUserData(access_token);
            // set token in the localStorage
            setTokens(access_token, refresh_token);

            state.loading = false;
            state.userInfo = userData;
            state.error = null;
            state.success = true;
        });
    },
});

export const { logout, setToken, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
