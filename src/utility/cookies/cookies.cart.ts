import { ICookiesData } from "../../type";
import CryptoJS from "crypto-js";

const encryptionKey = import.meta.env.VITE_SECRET_KEY;

export const encryptData = (data: ICookiesData[] | string[]) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    encryptionKey
  ).toString();
  return ciphertext;
};

export const decryptData = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalText);
};

export const setCartInCookies = (cartData: ICookiesData[]) => {
  const encryptedCartData = encryptData(cartData);
  // const cartDataJSON = JSON.stringify(cartData);
  const expirationDate = new Date(); // set expiry date
  expirationDate.setDate(expirationDate.getDate() + 364);
  const cookieString = `cartItems=${encodeURIComponent(
    encryptedCartData
  )}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  // const cookieString = `cartItems=${cartDataJSON}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  document.cookie = cookieString;
};

export const getCartFromCookies = () => {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  const cartDataCookie = cookieArray.find((cookie) =>
    cookie.trim().startsWith("cartItems=")
  ); // Find the "cartItems" cookie
  const cartData = cartDataCookie?.split("=")[1]; // get existing data
  // const existingCartItems = cartData ? JSON.parse(cartData) : []; // if no data make empty array
  // return existingCartItems;
  if (cartData) {
    try {
      const decryptedCartData = decryptData(decodeURIComponent(cartData));
      return decryptedCartData;
    } catch (error) {
      // Handle decryption error, e.g., data tampering
      // Return an empty array or handle the error as needed
    }
  }
  return [];
};

export const setSelectedCartInCookies = (cartData: ICookiesData[]) => {
  const encryptedCartData = encryptData(cartData);
  // const cartDataJSON = JSON.stringify(cartData);
  const expirationDate = new Date(); // set expiry date
  expirationDate.setDate(expirationDate.getDate() + 364);
  const cookieString = `selected=${encodeURIComponent(
    encryptedCartData
  )}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  // const cookieString = `selected=${cartDataJSON}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  document.cookie = cookieString;
};

export const getSelectedCartFromCookies = () => {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  const cartDataCookie = cookieArray.find((cookie) =>
    cookie.trim().startsWith("selected=")
  ); // Find the "selected" cookie
  const cartData = cartDataCookie?.split("=")[1]; // get existing data
  // const existingCartItems = cartData ? JSON.parse(cartData) : []; // if no data make empty array
  // return existingCartItems;
  if (cartData) {
    try {
      const decryptedCartData = decryptData(decodeURIComponent(cartData));
      return decryptedCartData;
    } catch (error) {
      // Handle decryption error, e.g., data tampering
      // Return an empty array or handle the error as needed
    }
  }
  return [];
};

export const setBuyNowInCookies = (cartData: ICookiesData[]) => {
  const encryptedData = encryptData(cartData);
  // const cartDataJSON = JSON.stringify(cartData);
  const expirationDate = new Date(); // set expiry date
  expirationDate.setDate(expirationDate.getDate() + 364);
  const cookieString = `buy=${encodeURIComponent(
    encryptedData
  )}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  // const cookieString = `selected=${cartDataJSON}; expires=${expirationDate.toUTCString()}; path=/; secure`; // make cookie string
  document.cookie = cookieString;
};

export const getBuyNowFromCookies = () => {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  const buyDataCookie = cookieArray.find((cookie) =>
    cookie.trim().startsWith("buy=")
  ); // Find the "selected" cookie
  const buyData = buyDataCookie?.split("=")[1]; // get existing data
  // const existingCartItems = cartData ? JSON.parse(cartData) : []; // if no data make empty array
  // return existingCartItems;
  if (buyData) {
    try {
      const decryptedCartData = decryptData(decodeURIComponent(buyData));
      return decryptedCartData;
    } catch (error) {
      // Handle decryption error, e.g., data tampering
      // Return an empty array or handle the error as needed
    }
  }
  return [];
};
