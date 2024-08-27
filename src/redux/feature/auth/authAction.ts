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
    message?: string|null
}

const initialState: IInitialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
    message: null
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
            let user
            if(payload.token.access){
                // set token in local storage
                setTokens(payload.token.access, payload.token.refresh);
                user = (payload.token.access);
            }
            state.loading = false;
            state.success = true;
            state.error = null;
            state.userToken = payload.token.access;
            state.userInfo = user || null;
        });
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.success = false;
            state.error = payload as string | null;
            state.userInfo = null;
        });
        builder.addCase(userSignup.pending, (state) => {
            state.loading = true;
            state.userInfo = null;
            state.error = null;
            state.success = false;
            state.message = null
        });
        builder.addCase(userSignup.fulfilled, (state, { payload }:{payload:any}) => {

            const { token, message } = payload || {};
            let userData = null;

            if (token && token.access) {
                userData = getUserData(token.access);
                setTokens(token.access, token.refresh);
            }
            state.loading = false;
            state.userInfo = userData;
            state.error = null;
            state.success = true;
            state.message = message || null
        });
        builder.addCase(userSignup.rejected, (state, { payload }:{payload:any}) => {
            console.log(payload)
            state.loading = false;
            state.success = false;
            state.error = payload.contact_number || null;
        });
    },
});

export const { logout, setToken, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
