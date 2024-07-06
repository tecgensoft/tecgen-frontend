// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Dexie from "dexie";

// export const db: any = new Dexie("shob.com.bd");
// // db.delete();
// db.version(1).stores({
//   carts: "uniqueId, slug, cid",
//   buyCart: "uniqueId, slug, cid",
//   // insertData: "++id",
// });

// export const getCartFromDexie = async () => {
//   try {
//     const { carts } = db;
//     const existingCartItems = await carts.toArray();
//     return existingCartItems;
//   } catch (error) {
//     return [];
//   }
// };

// // async function insertDataInCartScript() {

// //   try {
// //     await db.insertData
// //       .bulkAdd(data)
// //       .then(() => {})
// //       .catch(Dexie.BulkError, () => {
// //         console.log("cc");
// //       });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // insertDataInCartScript();
// export const getBuyNowFromIndexedb = async () => {
//   try {
//     const { buyCart } = db;
//     const buyCarts = await buyCart.toArray();
//     return buyCarts;
//   } catch (error) {
//     return [];
//   }
// };

// export const getCartFromCookies = async () => {
//   const cartData = await getCartFromDexie();
//   if (cartData) {
//     try {
//       return cartData;
//     } catch (error) {
//       //
//     }
//   }
//   return [];
// };
// export const getBuyNowCookies = async () => {
//   const buyNow = await getBuyNowFromIndexedb();
//   if (buyNow) {
//     try {
//       //
//       return buyNow;
//     } catch (error) {
//       //
//     }
//   }
//   return [];
// };

// export async function clearCartAfterSuccess() {
//   await db.carts
//     .clear()
//     .then(() => {
//       return [];
//     })
//     .catch(() => {
//       return [];
//     });
// }
// export async function clearBuyCartAfterSuccess() {
//   await db.buyCart
//     .clear()
//     .then(() => {
//       return [];
//     })
//     .catch(() => {
//       return [];
//     });
// }
