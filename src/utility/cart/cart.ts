/* eslint-disable @typescript-eslint/no-explicit-any */
import { db, getCartFromDexie } from "./cartDB";
const { cart } = db
export const addToCart = async (
    // dispatch: Dispatch,
    name: string | undefined,
    img: string | undefined,
    id: number | undefined,
    qty: number | undefined,
  ) => {
    const newItem = {
      name,
      img,
      id,
      qty,
    };
    try {
        // const newDate = new Date()
        // const uniqueId = `${newDate.getTime()}_id=${id}`
        // await cart.add({ uniqueId, ...newItem });
      const existingCartItems = await getCartFromDexie();
      const isExists = existingCartItems.some((item: any) => item.id === newItem.id);
    //   const indexOfItem = existingCartItems.findIndex((item: any) => item.country.cid === newItem.country.cid && item.slug === newItem.slug);
    //   existingCartItems.find((item: any) => item.slug === slug && item.country.cid === country.cid && updateValues(item.attr, attr));
      const newDate = new Date();
      const uniqueId = `${newDate.getTime()}_product_id=${id}`;
      const isIdExists = existingCartItems.some((item: any) => item.id === id);
      const isUniqueIdExists = existingCartItems.some((item: any) => item.uniqueId === uniqueId);
      if (!isExists) {
        if (!isIdExists && !isUniqueIdExists) {
          await cart.add({ uniqueId, ...newItem });
        }
      } else if (isExists) {
        await cart.update(existingCartItems[id], {
          qty: existingCartItems[id].qty + newItem.qty,
        });
      } else {
        await cart.add({ uniqueId, ...newItem });
      }
    //   dispatch(setCartData(await getCartFromDexie()));
    //   dispatch(setOpenMiniCart(true));
    } catch (error) {
      // console.log("Cart Error---------->", error);
    }
  };