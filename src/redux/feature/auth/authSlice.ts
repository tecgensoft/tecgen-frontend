/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./authAction";

export interface ISigningFormData {
    email: string;
    password: string;
}
export interface ISignupFormData {
    username: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    password: string;
}
interface IAuthResponse {
    access_token: string;
    refresh_token: string;
}

interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

interface RefreshTokenError {
    message: string;
}
const backendURL = import.meta.env.VITE_API_URL;

// < --------------------User signup----------------------- >
export const userSignup = createAsyncThunk<
    IAuthResponse,
    ISignupFormData,
    { rejectValue: string }
>("auth/signup", async (userData, { rejectWithValue }) => {
    try {
        const resp = await fetch(`${backendURL}/user/signup/`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // if response is not ok then return error message
        if (!resp.ok) {
            const data = await resp.json();
            return rejectWithValue(`${data.message}`);
        }
        // response is ok than return data
        const response = await resp.json();
        return response;
    } catch (error) {
        const castedError = error as any;
        if (castedError.response && castedError.response.data?.details[0]) {
            return rejectWithValue(castedError.response.data?.details[0]);
        }
        return rejectWithValue(castedError.message);
    }
});
// < --------------------User signup (END)----------------------- >

// < --------------------User login (START)----------------------- >
export const userLogin = createAsyncThunk<
    IAuthResponse,
    ISigningFormData,
    { rejectValue: string }
>("auth/login", async (formData: ISigningFormData, { rejectWithValue }) => {
    try {
        const resp = await fetch(`${backendURL}/user/login/`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // if response is not ok then return error message
        if (!resp.ok) {
            const data = await resp.json();
            return rejectWithValue(`${data.message}`);
        }
        // response is ok than return data
        const response = await resp.json();
        return response;
    } catch (error) {
        const castedError = error as any;
        if (castedError.response && castedError.response.data?.details[0]) {
            return rejectWithValue(castedError.response.data?.details[0]);
        }
        return rejectWithValue(castedError.message);
    }
});
// < --------------------User login (END)----------------------- >

// < --------------------Refresh auth token (START)----------------------- >
export const refreshAuthToken = createAsyncThunk<
    RefreshTokenResponse,
    void,
    {
        rejectValue: RefreshTokenError;
    }
>("auth/refreshToken", async (_, { dispatch }) => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
            const resp = await fetch(`${backendURL}/token/refresh/`, {
                method: "POST",
                body: JSON.stringify({ refresh: refreshToken }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const response = await resp.json();
            const { access_token, refresh_token } = response.data;
            localStorage.setItem("userToken", access_token);
            localStorage.setItem("refreshToken", refresh_token);
            return response.data;
        } else {
            dispatch(logout());
            throw new Error("No refresh token found");
        }
    } catch (error) {
        console.error(error);
        dispatch(logout());
        throw error;
    }
});
// < --------------------Refresh auth token (END)----------------------- >