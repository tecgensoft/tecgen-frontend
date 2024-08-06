/* eslint-disable @typescript-eslint/no-explicit-any */
import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore } from "@reduxjs/toolkit"
import { CombinedState } from "@reduxjs/toolkit/query"
import authReducer from "../redux/feature/auth/authAction"
import categoryReducer from "../redux/feature/categories/categoryAction"
import { getUserData } from "../utility/getUser"
import { api } from "./api/apiSlice"
import { IInitialState } from "./feature/auth/authAction"

const token = localStorage.getItem('token')

const initialState: IInitialState = {
  loading: false,
  userInfo: getUserData(token) || null,
  userToken: token,
  error: null,
  success: false,
}

const store: EnhancedStore<
  {
    category: any
    api: CombinedState<any, never, 'api'>
    auth: IInitialState
  },
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<
          {
            api: CombinedState<any, never, 'api'>
            auth: IInitialState
            category: any
          },
          undefined,
          UnknownAction
        >
      }>,
      StoreEnhancer,
    ]
  >
> = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    category: categoryReducer
  },
  preloadedState: {
    auth: initialState,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
