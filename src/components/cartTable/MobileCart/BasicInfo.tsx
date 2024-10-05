import { IoIosArrowDown } from "react-icons/io";
import Button from "../../shared/Button";
import Image from "../../shared/Image";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { useEffect, useRef, useState } from "react";
import { removeItemFromCart } from "../../../utility/cart";

const BasicInfo = ({
  item,
  open,
  setOpen,
  setQuantityOpen,
  data,
  countryWiseChanges,
  updateQty,
}: IBasicInfoProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const { scrollLeft } = container;
      if (scrollLeft > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  };

  const cart = pathname.includes("/cart");

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className=" flex overflow-scroll mt-2 scroll-smooth hide-scroll"
    >
      <div
        className={`flex shrink-0 w-[100%] justify-between gap-2 py-[13px] px-[10px] rounded-[13px] transition-all duration-300 z-20 ${
          cart ? "bg-white" : "bg-light"
        } `}
      >
        <div className="flex gap-3 w-full">
          <Button
            className={`text-black ${
              open
                ? "transition-all duration-300 rotate-180"
                : "transition-all duration-300 rotate-0"
            }`}
            onClick={() => {
              setOpen(!open);
              setQuantityOpen(null);
            }}
          >
            <IoIosArrowDown className="text-lg text-black-dim" />
          </Button>
          <Image
            src={data?.data?.variant?.images[0]}
            className="min-w-[80px] h-[80px] object-cover border border-light cursor-pointer rounded-md"
            onClick={() => navigateToProductDetails(item?.slug)}
          />
          <div className="flex flex-col justify-between w-full py-1px">
            <div>
              <p
                className="text-sm font-medium w-[130px] truncate capitalize cursor-pointer"
                onClick={() => navigateToProductDetails(item?.slug)}
              >
                {data?.data?.variant?.name}
              </p>
              <small className="text-spanish-gray text-xsm font-light block -mt-0.5">
                by{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() =>
                    navigate(`/store/${data?.data?.variant?.store?.slug}`)
                  }
                >
                  {data?.data?.variant?.store?.name}
                </span>{" "}
              </small>
            </div>
            <div className="flex gap-[5px] leading-none mb-2">
              <p className="text-sm font-semibold leading-none">৳ {item?.p}</p>
              {item?.p === item?.sp || (
                <p className="text-spanish-gray text-xsm font-medium line-through">
                  ৳ {item?.sp}
                </p>
              )}
            </div>
          </div>
        </div>
        {cart && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center h-[26px] min-w-[70px] bg-light rounded-full text-black">
              <Button
                className={`h-full flex items-center justify-center w-[20px]  pl-2 ${
                  item?.qty === 1 ||
                  item.qty! <=
                    countryWiseChanges?.quantityWisePrice[0]?.min_quantity
                    ? "text-slate-gray cursor-not-allowed"
                    : "text-black"
                }`}
                disabled={
                  item?.qty === 1 ||
                  item.qty! <=
                    countryWiseChanges?.quantityWisePrice[0]?.min_quantity
                }
                // onClick={() => decrementQty(dispatch, c.slug, c.countryName, c.attributes)}
                onClick={() => handleDecrement(item?.id, item?.c)}
              >
                -
              </Button>
              <p className="px-2 text-sm w-[30px] flex items-center justify-center">
                {item?.qty}
              </p>
              <Button
                className="pr-2 pb-2px h-full flex items-center justify-center w-[20px]"
                // onClick={() => incrementQty(dispatch, c.slug, c.countryName, c.attributes)}
                onClick={() => handleIncrement(item?.id, item?.c)}
              >
                +
              </Button>
            </div>
          </div>
        )}
      </div>
      {cart && (
        <div
          className={`lg:hidden text-white shrink-0 cursor-pointer ${
            isScrolling ? "bg-secondary" : ""
          }  flex justify-center items-center rounded-r-[13px] z-10 -ml-3`}
        >
          <BsFillTrash3Fill
            className="text-white cursor-pointer text-xl w-full ml-2 px-[18px]"
            onClick={() =>
              removeItemFromCart(dispatch, cartData, item?.slug, item?.cn)
            }
            // onClick={() => removeItemFromCart(dispatch, cartData, c.slug, c.countryName, c.attributes)}
          />
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
