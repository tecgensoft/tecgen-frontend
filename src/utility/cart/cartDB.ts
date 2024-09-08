import Dexie from "dexie";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db: any = new Dexie("tecgen");

// db.delete();
db.version(1).stores({
    cart: "uniqueId, id",
    buyCart: "uniqueId, id",
});

export const getCartFromDexie = async () => {
    try {
        const { cart } = db;
        const existingCartItems = await cart.toArray();
        return existingCartItems;
    } catch (error) {
        return [];
    }
};

export async function clearCartAfterSuccess() {
    await db.cart
        .clear()
        .then(() => {
            return [];
        })
        .catch(() => {
            return [];
        });
}
