/* eslint-disable no-nested-ternary */
// import { useEffect } from "react";
import noCart from "../../assets/no-cart.png";
import NoItems from "../../components/shared/NoItems";

// import CartLoader from "../../loader/cart/CartLoader";

// import { setAllProducts } from "../../redux/feature/cart/cartSlice";
// import { useGetAllProductsQuery } from "../../redux/feature/product/productApi";
import { useAppSelector } from "../../redux/hooks";

import MyCart from "./components/MyCart";
import SuggestedProducts from "./components/SuggestedProducts";
import TotalAmount from "./components/TotalAmount";

const Cart = () => {
  const { cartData } = useAppSelector((state) => state.cart);

  return (
    <div className="container">
      {cartData?.length > 0 ? (
        <>
          <MyCart />
          <TotalAmount />
        </>
      ) : (
        <>
          <NoItems
            img={noCart}
            title="Your cart is empty."
            spanText="Keep shopping to explore more."
          />
          <SuggestedProducts />
        </>
      )}
    </div>
  );
};
export default Cart;
