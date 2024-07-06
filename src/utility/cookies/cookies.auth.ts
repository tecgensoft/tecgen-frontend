// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { AES, enc } from "crypto-js";

// const encryptionKey = import.meta.env.VITE_SECRET_KEY;
// export function setCookie(name: string, value: string, time: number): void {
//   // Encrypt the value before storing it in the cookie
//   const encryptedValue = AES.encrypt(value, encryptionKey).toString();

//   // Set the cookie with the encrypted value
//   const expires = new Date(time * 1000).toUTCString();
//   document.cookie = `${name}=${encryptedValue}; expires=${expires}; path=/`;
// }
// // export function setTemporalCookie(name: string, value: any, time: number): void {
// //   // Encrypt the value before storing it in the cookie
// //   const encryptedValue = AES.encrypt(value, encryptionKey).toString();

// //   // Set the cookie with the encrypted value
// //   const expires = new Date(Date.now() + time * 1000).toUTCString(); // Add time in milliseconds
// //   document.cookie = `${name}=${encryptedValue}; expires=${expires}; path=/`;
// // }
// export function setTemporalCookie(name: string, value: any, time: number): void {
//   // Serialize the object into a string
//   const serializedValue = JSON.stringify(value);
//   const encryptedValue = AES.encrypt(serializedValue, encryptionKey).toString();
//   const expires = new Date(Date.now() + time * 1000).toUTCString(); // Add time in milliseconds
//   document.cookie = `${name}=${encryptedValue}; expires=${expires}; path=/`;
// }
// export function getCookie(name: string): string | undefined {
//   const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
//   if (cookieValue) {
//     const decodedValue = decodeURIComponent(cookieValue[2]);
//     // Decrypt the cookie value
//     try {
//       const decryptedValue = AES.decrypt(decodedValue, encryptionKey).toString(enc.Utf8);
//       return decryptedValue;
//     } catch (error) {
//       // Handle decryption error (e.g., if the value was not encrypted properly)
//       return undefined;
//     }
//   }
//   return undefined;
// }

// export function deleteCookie(name: string): void {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
// }
