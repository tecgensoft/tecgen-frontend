/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAttributes {
  id: number;
  name: string;
  value: string;
}
export interface ICookiesData {
  slug: string;
  id: number;
  qty?: number;
  c: number;
  qid: number;
  cn: string;
  attr: IAttributes[];
  sp: number;
  p: number;
  d: number;
}
interface ICart {
  // allProducts: IProduct[] | undefined;
  // dealsProduct: IProduct[] | undefined;
  showMiniCart: boolean;
  cartData: ICookiesData[];
  subTotal: number;
  checkoutTotal: number | undefined;
  checkedSlug: ICookiesData[] | undefined;
}

const initialState: ICart = {
  // allProducts: [],
  // dealsProduct: [],
  showMiniCart: false,
  cartData: [],
  subTotal: 0,
  checkoutTotal: 0,
  checkedSlug: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // setAllProducts: (state, action: PayloadAction<IProduct[] | undefined>) => {
    //   return {
    //     ...state,
    //     allProducts: action.payload,
    //   };
    // },
    // setDealsProducts: (state, action: PayloadAction<IProduct[] | undefined>) => {
    //   return {
    //     ...state,
    //     dealsProduct: action.payload,
    //   };
    // },
    setOpenMiniCart: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        showMiniCart: action.payload,
      };
    },
    setCartData: (state, action: PayloadAction<ICookiesData[]>) => {
      return {
        ...state,
        cartData: action.payload,
      };
    },
    setCheckedSlug: (
      state,
      action: PayloadAction<ICookiesData[] | undefined>
    ) => {
      return {
        ...state,
        checkedSlug: action.payload,
      };
    },
    setSubTotal: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        subTotal: action.payload,
      };
    },
    setCheckoutTotal: (state, action: PayloadAction<number | undefined>) => {
      return {
        ...state,
        checkoutTotal: action.payload,
      };
    },
  },
});

export const {
  setOpenMiniCart,
  setCartData,
  setSubTotal,
  setCheckedSlug,
  setCheckoutTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
