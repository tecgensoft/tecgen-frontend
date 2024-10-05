/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "../../shared/Image";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { removeItemFromCart } from "../../../utility/cart";
import { BsFillTrash3Fill } from "react-icons/bs";
import { IBasicInfoProps } from "../../types";

const BasicInfo = ({
  visibleColumns,
  item,
  open,
  setOpen,
  detailsWidth,
  colWidth,
  setQuantityOpen,
  data,
  updateQty,
  countryWiseChanges,
}: IBasicInfoProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cartData } = useAppSelector((state) => state.cart);

  const handleIncrement = (productId: number, countryId: number) => {
    updateQty(productId, countryId, true);
  };

  const handleDecrement = (productId: number, countryId: number) => {
    updateQty(productId, countryId, false);
  };

  const navigateToProductDetails = (slug: string | undefined) => {
    if (slug) {
      navigate(`/product-details/product_variant=${slug}`);
    }
  };

  return (
    <tr className="rounded-[5px] shadow-3xl hidden lg:table-row">
      {visibleColumns?.[0] && (
        // <td className="py-4 px-5 w-[50px]">
        //   <input
        //     type="checkbox"
        //     name="checkbox"
        //     id="checkbox"
        //     onChange={() => handleItemSelection(item)}
        //     checked={
        //       // !!selectedItems?.find((item) => item.slug === c.slug && item.cn === c.countryName && checkArrays(item.attr, c.attributes))
        //       !!selectedItems?.find((select) => select?.slug === item?.slug && select?.cn === item?.cn)
        //     }
        //   />
        // </td>
        <td className="py-4 px-5 w-[50px]">
          <Button
            className={`text-black ${open ? "transition-all duration-300 rotate-180" : "transition-all duration-300 rotate-0"}`}
            onClick={() => {
              setOpen(!open);
              setQuantityOpen(null);
            }}
          >
            <IoIosArrowDown className="text-lg text-black-dim" />
          </Button>
        </td>
      )}
      {visibleColumns?.[1] && (
        <td className={`py-4 ${visibleColumns[0] ? "px-0" : "px-8"} ${detailsWidth}`}>
          <div className="flex items-center gap-5">
            <Image
              src={data?.data?.variant?.images[0]}
              className="min-w-[60px] h-[55px] object-cover rounded p-2 border border-light cursor-pointer"
              onClick={() => navigateToProductDetails(item?.slug)}
              //  ${
              //    location.pathname === "/cart" &&
              //    !!selectedItems?.find((select) => select?.slug === item?.slug && select?.cn === item?.cn)
              //      ? "border border-primary-dark"
              //      : "border border-light"
              //  }
            />
            <div className="w-full">
              <p className="font-normal text-sm w-[200px] capitalize cursor-pointer" onClick={() => navigateToProductDetails(item?.slug)}>
                {data?.data?.variant?.name?.length && data?.data?.variant?.name?.length > 47
                  ? `${data?.data?.variant?.name?.slice(0, 47)}...`
                  : data?.data?.variant?.name}
              </p>
              <p className="text-xs font-light cursor-pointer ">
                by{" "}
                <span className="hover:underline" onClick={() => navigate(`/store/${data?.data?.variant?.store?.slug}`)}>
                  {" "}
                  {data?.data?.variant?.store?.name}
                </span>
              </p>
            </div>
          </div>
        </td>
      )}
      {visibleColumns?.[3] && (
        <td className="py-4 text-center text-sm w-[150px]">
          ৳ {item?.p || 0}
          {item?.p === item?.sp || (
            <span className="line-through text-xs text-[#8D8D8D] pl-1">
              <br />৳ {item?.sp || 0}
            </span>
          )}
        </td>
      )}
      {visibleColumns?.[2] && (
        <td className="py-4 w-[150px]">
          {location.pathname === "/cart" ? (
            <div className="flex items-center border border-slate-gray rounded-[5px] w-[90px] h-[30px] mx-auto">
              <Button
                className={`px-2 border-r border-slate-gray h-full w-[25px] flex items-center justify-center ${
                  item?.qty === 1 || item.qty! <= countryWiseChanges?.quantityWisePrice[0]?.min_quantity
                    ? "text-slate-gray cursor-not-allowed"
                    : "text-black"
                }`}
                disabled={item?.qty === 1 || item.qty! <= countryWiseChanges?.quantityWisePrice[0]?.min_quantity}
                // onClick={() => decrementQty(dispatch, c.slug, c.countryName, c.attributes)}
                onClick={() => handleDecrement(item?.id, item?.c)}
              >
                -
              </Button>
              <p className="px-2 text-sm border-r border-slate-gray font-light h-full flex items-center justify-center w-[40px]">
                {item?.qty}
              </p>
              {/* <input
                      min={1}
                      className="text-center text-sm outline-none bg-transparent border-r border-slate-gray font-light h-full flex items-center justify-center w-[40px]"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value as unknown as number);
                        incrementQty(dispatch, item?.slug, item?.cn, quantity);
                      }}
                    /> */}
              <Button
                type="button"
                className=" px-2 border-slate-gray h-full w-[25px] flex items-center justify-center"
                // onClick={() => incrementQty(dispatch, c.slug, c.countryName, c.attributes)}
                onClick={() => handleIncrement(item?.id, item?.c)}
              >
                +
              </Button>
            </div>
          ) : (
            <p className="text-center text-sm">{item?.qty}x</p>
          )}
        </td>
      )}
      {visibleColumns?.[4] && <td className="py-4 text-center text-sm w-[150px]">৳ {(item?.p * item.qty!).toFixed(2)}</td>}
      {visibleColumns?.[5] && (
        <td className={` py-4 ${colWidth}`}>
          <BsFillTrash3Fill
            className="text-primary-dark text-xl cursor-pointer hover:text-secondary flex justify-center w-full mb-1"
            // onClick={() => removeItemFromCart(dispatch, cartData, c.slug, c.countryName, c.attributes, setSelectedItems)}
            // onClick={() => removeItemFromCart(dispatch, cartData, item?.slug, item?.cn, setSelectedItems)}
            onClick={() => removeItemFromCart(dispatch, cartData, item?.slug, item?.cn)}
          />
        </td>
      )}
      {/* {visibleColumns[6] && (
              <td className={`py-4 ${colWidth}`}>
                <MdModeEdit
                  className="text-primary-dark text-2xl flex justify-center w-full cursor-pointer hover:text-secondary "
                  onClick={() => navigate(`/product-details/id=${item?.slug}`)}
                />
              </td>
            )} */}
    </tr>
  );
};

export default BasicInfo;
