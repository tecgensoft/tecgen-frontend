import { useState } from "react";
import QuantityWisePrice from "./QuantityWisePrice";
import { ShowDetails } from "./ShowDetails";
import BasicInfo from "./BasicInfo";
import { useGetProductByIdQuery } from "../../../redux/feature/product/productSlice";
import CartLoader from "../../../loader/cart/CartLoader";
import { useCart } from "../../../hooks/useCart";

const CartTableBody = ({
  item,
  visibleColumns,
  // handleItemSelection,
  // selectedItems,
  detailsWidth,
  colWidth,
  quantityOpen,
  setQuantityOpen,
  setCountryOpen,
  countryOpen,
}: // setSelectedItems,
ICartTableBody) => {
  // const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductByIdQuery(item?.slug);
  const [open, setOpen] = useState<boolean>(false);
  const { countryWiseChanges, updateQty } = useCart(
    data,
    item,
    setOpen,
    setQuantityOpen,
    setCountryOpen
  );

  return (
    <>
      {isLoading ? (
        <CartLoader />
      ) : (
        <tbody>
          <BasicInfo
            visibleColumns={visibleColumns}
            open={open}
            setOpen={setOpen}
            setQuantityOpen={setQuantityOpen}
            data={data}
            item={item}
            countryWiseChanges={countryWiseChanges}
            updateQty={updateQty}
            detailsWidth={detailsWidth}
            colWidth={colWidth}
          />
          <tr
            className={`${
              open ? "shadow-3xl" : null
            } rounded-[5px]  bg-cultured hidden lg:table-row`}
          >
            <td colSpan={7} className="px-2">
              <div
                className={` ${
                  open
                    ? "opacity-100 duration-500 flex justify-center flex-wrap gap-x-[96px] gap-y-4 py-[13px]"
                    : "opacity-0 max-h-0 overflow-hidden duration-500"
                } `}
              >
                <ShowDetails data={data} item={item} />
              </div>
            </td>
          </tr>
          <tr className="hidden lg:table-row">
            <td colSpan={7} className="px-2">
              <div
                className={`flex justify-center gap-x-[50px] duration-500 ${
                  quantityOpen === item?.id && countryOpen === item?.c
                    ? "opacity-100 pb-2"
                    : "opacity-0 max-h-0 overflow-hidden"
                } `}
              >
                <QuantityWisePrice
                  setQuantityOpen={setQuantityOpen}
                  countryWiseChanges={countryWiseChanges}
                />
              </div>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};
export default CartTableBody;
