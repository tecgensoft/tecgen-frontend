/* eslint-disable no-param-reassign */
import { Dispatch } from "@reduxjs/toolkit";
import { setCartData, setOpenMiniCart } from "../redux/feature/cart/cartSlice";
import {
  getBuyNowFromCookies,
  getCartFromCookies,
  setBuyNowInCookies,
  setCartInCookies,
} from "./cookies/cookies.cart";

// export const checkArrays = (arr1: IAttributes[], arr2: IAttributes[]) => {
//   return arr1.every((item1) => {
//     const matchingItem = arr2.find((item2) => item1.id === item2.id);
//     return matchingItem && item1.value === matchingItem.value;
//   });
// };
let updated: boolean;
function updateValues(arr1: IAttributes[], arr2: IAttributes[]) {
  updated = false;
  arr1.forEach((attrItem) => {
    const match = arr2.find((refItem) => refItem.name === attrItem.name);
    if (match && match.value !== attrItem.value) {
      attrItem.value = match.value;
      updated = true;
    }
  });
  return updated;
}

export const addToCart = async (
  dispatch: Dispatch,
  slug: string | undefined,
  id: number | undefined,
  qid: number | undefined,
  attr: IAttributes[],
  cid: number | undefined,
  cn: string | undefined,
  sellingPrice: number,
  updatedPrice: number,
  discount: number,
  qty = 1
) => {
  const existingCartItems = await getCartFromCookies();
  const isExists = existingCartItems.find(
    (data: ICookiesData) => data?.slug === slug
  );
  const indexOfCountry = existingCartItems.findIndex(
    (data: ICookiesData) => data?.slug === slug && data?.cn === cn
  );

  // const indexOfAttr = existingCartItems.findIndex(
  //   (item: ICookiesData) => item.slug === slug && item.cn === cn && checkArrays(item.attr, attr)
  // );
  existingCartItems.find(
    (item: ICookiesData) =>
      item.slug === slug && item.cn === cn && updateValues(item.attr, attr)
  );

  // if (isExists && indexOfCountry !== -1 && indexOfAttr === -1) {
  //   existingCartItems.push({ slug, id, qid, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  // } else if (isExists && indexOfCountry !== -1 && indexOfAttr !== -1) {
  //   existingCartItems[indexOfAttr].qty += qty;
  // }  else

  if (isExists && indexOfCountry === -1) {
    existingCartItems.push({
      slug,
      id,
      qid,
      qty,
      attr,
      c: cid,
      cn,
      sp: sellingPrice,
      p: updatedPrice,
      d: discount,
    });
  } else if (isExists && indexOfCountry !== -1 && updated) {
    existingCartItems[indexOfCountry].qty = qty;
    existingCartItems[indexOfCountry].attr = attr;
  } else if (isExists && indexOfCountry !== -1) {
    existingCartItems[indexOfCountry].qty += qty;
  } else {
    existingCartItems.push({
      slug,
      id,
      qid,
      qty,
      attr,
      c: cid,
      cn,
      sp: sellingPrice,
      p: updatedPrice,
      d: discount,
    });
  }

  // if (isExists) {
  //   isExists.qty += qty;
  // } else {
  //   existingCartItems.push({ slug, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  // }

  setCartInCookies(existingCartItems);
  dispatch(setCartData(existingCartItems));
  dispatch(setOpenMiniCart(true));

  // const existingSelectedtItems = await getSelectedCartFromCookies();
  // const isSelectedExists = existingSelectedtItems.find((data: ICookiesData) => data?.slug === slug);
  // const sIndexOfCountry = existingSelectedtItems.findIndex((data: ICookiesData) => data?.slug === slug && data?.cn === cn);
  // existingSelectedtItems.find((item: ICookiesData) => item.slug === slug && item.cn === cn && updateValues(item.attr, attr));

  // const sIndexOfAttr = existingSelectedtItems.findIndex(
  //   (item: ICookiesData) => item.slug === slug && item.cn === cn && checkArrays(item.attr, attr)
  // );

  // if (isSelectedExists && sIndexOfCountry !== -1 && sIndexOfAttr === -1) {
  //   existingSelectedtItems.push({ slug, id, qid, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  //   setSelectedCartInCookies(existingSelectedtItems);
  //   // dispatch(setCheckedSlug(existingSelectedtItems));
  // } else

  // if (isSelectedExists && sIndexOfCountry === -1) {
  //   existingSelectedtItems.push({ slug, id, qid, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  //   setSelectedCartInCookies(existingSelectedtItems);
  // } else if (isSelectedExists && sIndexOfCountry !== -1 && updated) {
  //   existingSelectedtItems[sIndexOfCountry].qty = qty;
  //   existingSelectedtItems[sIndexOfCountry].attr = attr;
  //   setSelectedCartInCookies(existingSelectedtItems);
  // } else if (isSelectedExists && sIndexOfCountry !== -1) {
  //   existingSelectedtItems[sIndexOfCountry].qty += qty;
  //   setSelectedCartInCookies(existingSelectedtItems);
  // } else if (!isSelectedExists) {
  //   existingSelectedtItems.push({ slug, id, qid, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  //   setSelectedCartInCookies(existingSelectedtItems);
  // }
  // dispatch(setCheckedSlug(existingSelectedtItems));

  // if (!isSelectedExists) {
  //   existingSelectedtItems.push({ slug, qty, attr, c: cid, cn, sp: sellingPrice, p: updatedPrice });
  //   setSelectedCartInCookies(existingSelectedtItems);
  //   // dispatch(setCheckedSlug(existingSelectedtItems));
  // }
};

export const buyNow = async (
  slug: string | undefined,
  id: number | undefined,
  qid: number | undefined,
  attr: IAttributes[],
  cid: number | undefined,
  cn: string | undefined,
  sellingPrice: number,
  updatedPrice: number,
  discount: number,
  qty = 1
) => {
  const existingCartItems = await getBuyNowFromCookies();
  existingCartItems.length = 0;
  existingCartItems.push({
    slug,
    id,
    qid,
    qty,
    attr,
    c: cid,
    cn,
    sp: sellingPrice,
    p: updatedPrice,
    d: discount,
  });
  setBuyNowInCookies(existingCartItems);
};

export const removeItemFromCart = async (
  dispatch: Dispatch,
  cartData: ICookiesData[],
  item: string,
  cn: string
  // attr: IAttributes[],
  // setSelectedItems?: (items: ICookiesData[]) => void
) => {
  // const deleteItem = cartData.find((c: ICookiesData) => c.slug === item && c.cn === cn && checkArrays(c.attr, attr));
  const deleteItem = cartData.find(
    (c: ICookiesData) => c.slug === item && c.cn === cn
  );
  const updatedCart = cartData.filter((cartItem) => cartItem !== deleteItem);
  setCartInCookies(updatedCart);
  dispatch(setCartData(updatedCart));

  // const existingSelectedtItems = await getSelectedCartFromCookies();
  // // const deleteSelectedItem = existingSelectedtItems.find((c: ICookiesData) => c.slug === item && c.cn === cn && checkArrays(c.attr, attr));
  // const deleteSelectedItem = existingSelectedtItems.find((c: ICookiesData) => c.slug === item && c.cn === cn);
  // const deleteFromSelected = existingSelectedtItems.filter((selected: ICookiesData) => selected !== deleteSelectedItem);
  // if (setSelectedItems) {
  //   setSelectedItems(deleteFromSelected);
  // }
  // setSelectedCartInCookies(deleteFromSelected);
  // dispatch(setCheckedSlug(deleteFromSelected));
};

export const incrementQty = async (
  dispatch: Dispatch,
  slug: string,
  countryName: string,
  quantityId: number | undefined,
  sellingPrice: number,
  updatedPrice: number,
  discount: number,
  qty: number
) => {
  const existingCartItems = await getCartFromCookies();
  const isExists = existingCartItems.find(
    (data: ICookiesData) => data?.slug === slug
  );
  const indexOfCountry = existingCartItems.findIndex(
    (data: ICookiesData) => data?.slug === slug && data?.cn === countryName
  );

  // const indexOfAttr = existingCartItems.findIndex(
  //   (item: ICookiesData) => item.slug === slug && item.cn === cn && checkArrays(item.attr, attr)
  // );

  // if (isExists && indexOfCountry !== -1 && indexOfAttr !== -1) {
  //   existingCartItems[indexOfAttr].qty += 1;
  // } else
  if (isExists && indexOfCountry !== -1) {
    existingCartItems[indexOfCountry].qty = qty;
    existingCartItems[indexOfCountry].qid = quantityId;
    existingCartItems[indexOfCountry].sp = sellingPrice;
    existingCartItems[indexOfCountry].p = updatedPrice;
    existingCartItems[indexOfCountry].d = discount;
    setCartInCookies(existingCartItems);
    dispatch(setCartData(existingCartItems));
  }

  // if (isExists) {
  //   isExists.qty += 1;
  // }

  // const existingSelectedtItems = await getSelectedCartFromCookies();
  // const isSelectedExists = existingSelectedtItems.find((data: ICookiesData) => data?.slug === slug);
  // const sIndexOfCountry = existingSelectedtItems.findIndex((data: ICookiesData) => data?.slug === slug && data?.cn === cn);
  // if (isSelectedExists && sIndexOfCountry !== -1) {
  //   existingSelectedtItems[sIndexOfCountry].qty += 1;
  //   setSelectedCartInCookies(existingSelectedtItems);
  //   dispatch(setCheckedSlug(existingSelectedtItems));
  // }
};

export const decrementQty = async (
  dispatch: Dispatch,
  slug: string,
  countryName: string,
  quantityId: number | undefined,
  sellingPrice: number,
  updatedPrice: number,
  discount: number,
  qty: number
) => {
  const existingCartItems = await getCartFromCookies();
  const isExists = existingCartItems.find(
    (data: ICookiesData) => data?.slug === slug
  );

  const indexOfCountry = existingCartItems.findIndex(
    (data: ICookiesData) => data?.slug === slug && data?.cn === countryName
  );

  // const indexOfAttr = existingCartItems.findIndex(
  //   (item: ICookiesData) => item.slug === slug && item.cn === cn && checkArrays(item.attr, attr)
  // );

  // isExists.qty -= 1;

  // if (isExists && indexOfCountry !== -1 && indexOfAttr !== -1 && isExists.qty >= 1) {
  //   existingCartItems[indexOfAttr].qty -= 1;
  // } else
  if (isExists && indexOfCountry !== -1) {
    existingCartItems[indexOfCountry].qty = qty;
    existingCartItems[indexOfCountry].qid = quantityId;
    existingCartItems[indexOfCountry].sp = sellingPrice;
    existingCartItems[indexOfCountry].p = updatedPrice;
    existingCartItems[indexOfCountry].d = discount;
    setCartInCookies(existingCartItems);
    dispatch(setCartData(existingCartItems));
  }

  // if (isExists && isExists.qty >= 1) {
  //   setCartInCookies(existingCartItems);
  //   dispatch(setCartData(existingCartItems));

  // const existingSelectedtItems = await getSelectedCartFromCookies();
  // const isSelectedExists = existingSelectedtItems.find((data: ICookiesData) => data?.slug === slug);
  // const sIndexOfCountry = existingSelectedtItems.findIndex((data: ICookiesData) => data?.slug === slug && data?.cn === cn);
  // if (isSelectedExists && sIndexOfCountry !== -1) {
  //   existingSelectedtItems[sIndexOfCountry].qty -= 1;
  //   setSelectedCartInCookies(existingSelectedtItems);
  //   dispatch(setCheckedSlug(existingSelectedtItems));
  // }
  // }
};
