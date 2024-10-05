import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { ICookiesData } from "../../types/types";
import {
  // setCartData,
  // setCheckedSlug,
  // setCheckoutTotal,
  setSubTotal,
} from "../../redux/feature/cart/cartSlice";
// import { useLocation } from "react-router-dom";
// import { getSelectedCartFromCookies, setCartInCookies, setSelectedCartInCookies } from "../../utility/cookies/cookies.cart";
import CartTableHeader from "./CartTableHeader";
import { useLocation } from "react-router-dom";
import CartTableBody from "./CartTableBody";
import MobileCart from "./MobileCart";
import { getBuyNowFromCookies } from "../../utility/cookies/cookies.cart";
import { useMouseClick } from "../../hooks/useMouseClick";

const CartTable = ({
  title,
  detailsWidth,
  colWidth,
  visibleColumns,
}: ICartTableProps) => {
  const dispatch = useAppDispatch();
  // const [quantityOpen, setQuantityOpen] = useState<number | null>(null);
  // const location = useLocation();
  const {
    cartData,
    // checkedSlug
  } = useAppSelector((state) => state.cart);
  const { state } = useLocation();
  // console.log(location);
  const { open, setOpen, reference } = useMouseClick();
  const buyNow = getBuyNowFromCookies();
  const [countryOpen, setCountryOpen] = useState<number | null>(null);

  // const selectedItemsFromCookie = getSelectedCartFromCookies();
  // const selectedItemsFromCookie = getSelectedCartFromCookies();
  // const [selectedItems, setSelectedItems] = useState<ICookiesData[]>(selectedItemsFromCookie);
  // select one  by one
  // const handleItemSelection = (c: ICookiesData) => {
  //   // const selectItem = selectedItems.find(
  //   //   (data: ICookiesData) => data.slug === c.slug && data.cn === c.countryName && checkArrays(data.attr, c.attributes)
  //   // );
  //   const selectItem = selectedItems.find((data: ICookiesData) => data.slug === c.slug && data.cn === c.cn);
  //   setSelectedItems(
  //     selectItem
  //       ? // ? selectedItems?.filter((item) => !(item.slug === c.slug && item.cn === c.countryName && checkArrays(item.attr, c.attributes)))
  //         selectedItems?.filter((item) => !(item.slug === c.slug && item.cn === c.cn))
  //       : [
  //           ...selectedItems,
  //           {
  //             slug: c.slug,
  //             id: c.id,
  //             c: c.c,
  //             cn: c?.cn,
  //             attr: c.attr,
  //             p: c?.p,
  //             sp: c?.sp,
  //             qty: c.qty,
  //             qid: c.qid,
  //             d: c.d,
  //           },
  //         ]
  //   );
  // };
  // select all checkbox
  // const handleSelectAll = () => {
  //   setSelectedItems(
  //     selectedItems?.length === cartData?.length
  //       ? []
  //       : cartData?.map((c: ICookiesData) => ({
  //           slug: c.slug,
  //           id: c.id,
  //           c: c.c,
  //           cn: c?.cn,
  //           attr: c.attr,
  //           p: c?.p,
  //           sp: c?.sp,
  //           qty: c.qty,
  //           qid: c.qid,
  //           d: c.d,
  //         }))
  //   );
  // };
  // const checkoutTotal = checkedSlug?.reduce((total: number, c: ICookiesData) => total + c.p * (c.qty ?? 0), 0);
  // useEffect(() => {
  //   dispatch(setCheckoutTotal(checkoutTotal));
  // }, [checkoutTotal, dispatch]);
  // useEffect(() => {
  //   setSelectedCartInCookies(selectedItems);
  //   dispatch(setCheckedSlug(selectedItems));
  // }, [dispatch, selectedItems]);

  // delete multiple items
  // const deleteSelectedItems = () => {
  //   const updatedSelectedItems = selectedItems?.filter((selectedSlug) => {
  //     const isDeleted = cartData.some(
  //       (cartItem) =>
  //         // cartItem.slug === selectedSlug.slug && cartItem.cn === selectedSlug.cn && checkArrays(cartItem.attr, selectedSlug.attr)
  //         cartItem.slug === selectedSlug.slug && cartItem.cn === selectedSlug.cn
  //     );
  //     return !isDeleted;
  //   });
  //   selectedItems?.reduce((updatedCart, item) => {
  //     const newCart = updatedCart.filter(
  //       // (cartItem) => !(cartItem.slug === item.slug && cartItem.cn === item.cn && checkArrays(cartItem.attr, item.attr))
  //       (cartItem) => !(cartItem.slug === item.slug && cartItem.cn === item.cn)
  //     );
  //     setCartInCookies(newCart);
  //     dispatch(setCartData(newCart));
  //     return newCart; // Pass the updated cart to the next iteration
  //   }, cartData);
  //   setSelectedItems(updatedSelectedItems);
  //   setSelectedCartInCookies(updatedSelectedItems);
  // };
  const total = cartData?.reduce(
    (total: number, c: { p: number; qty: number }) =>
      total + c.p * (c.qty ?? 0),
    0
  );
  useEffect(() => {
    dispatch(setSubTotal(total));
  }, [dispatch, total]);

  return (
    <div ref={reference}>
      <table className="table-auto w-full border-separate border-spacing-[6px] hidden lg:table">
        <CartTableHeader
          title={title}
          // handleSelectAll={handleSelectAll}
          // selectedItems={selectedItems}
          // deleteSelectedItems={deleteSelectedItems}
          visibleColumns={visibleColumns}
        />
        {
          state?.buy === "buyNow"
            ? buyNow?.map((item: ICookiesData, index: number) => (
                <CartTableBody
                  key={index}
                  item={item}
                  // handleItemSelection={handleItemSelection}
                  // setSelectedItems={setSelectedItems}
                  // selectedItems={selectedItems}
                  detailsWidth={detailsWidth}
                  colWidth={colWidth}
                  visibleColumns={visibleColumns}
                  quantityOpen={open}
                  setQuantityOpen={setOpen}
                  countryOpen={countryOpen}
                  setCountryOpen={setCountryOpen}
                />
              ))
            : // location.pathname === "/cart" ?
              cartData?.map((item: ICookiesData, index: number) => (
                <CartTableBody
                  key={index}
                  item={item}
                  // handleItemSelection={handleItemSelection}
                  // setSelectedItems={setSelectedItems}
                  // selectedItems={selectedItems}
                  detailsWidth={detailsWidth}
                  colWidth={colWidth}
                  visibleColumns={visibleColumns}
                  quantityOpen={open}
                  setQuantityOpen={setOpen}
                  countryOpen={countryOpen}
                  setCountryOpen={setCountryOpen}
                />
              ))
          // : selectedItems?.map((item, index) => (
          //     <CartTableBody
          //       key={index}
          //       item={item}
          //       handleItemSelection={handleItemSelection}
          //       setSelectedItems={setSelectedItems}
          //       selectedItems={selectedItems}
          //       detailsWidth={detailsWidth}
          //       iconWidth={iconWidth}
          //       visibleColumns={visibleColumns}
          //     />
          //   ))
        }
      </table>
      <div className="lg:hidden">
        {state?.buy === "buyNow"
          ? buyNow?.map((item: ICookiesData, index: number) => (
              <MobileCart
                key={index}
                item={item}
                quantityOpen={open}
                setQuantityOpen={setOpen}
                countryOpen={countryOpen}
                setCountryOpen={setCountryOpen}
              />
            ))
          : cartData?.map((item: ICookiesData, index: number) => (
              <MobileCart
                key={index}
                item={item}
                quantityOpen={open}
                setQuantityOpen={setOpen}
                countryOpen={countryOpen}
                setCountryOpen={setCountryOpen}
              />
            ))}
      </div>
    </div>
  );
};
export default CartTable;
