/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../../types/Category";
// import { IProduct } from "../../../types/types";

interface IProducts {
  categories: ICategory[] | undefined;
}

const initialState: IProducts = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[] | undefined>) => {
      return {
        ...state,
        categories: action.payload,
      };
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
