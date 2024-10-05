import { ShowDetails } from "../CartTableBody/ShowDetails";
import QuantityWisePrice from "../CartTableBody/QuantityWisePrice";
import BasicInfo from "./BasicInfo";
import { memo, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { useGetProductByIdQuery } from "../../../redux/feature/product/productSlice";
import Loader from "../../../loader/Loader";

const MobileCart = ({
  item,
  quantityOpen,
  setQuantityOpen,
  setCountryOpen,
  countryOpen,
}: ICartTableBody) => {
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
    <div className="lg:hidden">
      {isLoading && <Loader />}
      <BasicInfo
        open={open}
        setOpen={setOpen}
        setQuantityOpen={setQuantityOpen}
        data={data}
        item={item}
        countryWiseChanges={countryWiseChanges}
        updateQty={updateQty}
      />
      <div
        className={`${
          open ? "shadow-3xl " : null
        } rounded-[5px]  bg-cultured lg:hidden mt-2`}
      >
        <div
          className={` ${
            open
              ? "opacity-100 duration-500 flex justify-center flex-wrap gap-x-[96px] gap-y-4 py-[13px]"
              : "opacity-0 max-h-0 overflow-hidden duration-500"
          } `}
        >
          <ShowDetails data={data} item={item} />
        </div>
      </div>

      <div
        className={`lg:hidden flex justify-center gap-x-[50px]  ${
          quantityOpen === item?.id && countryOpen === item?.c
            ? "opacity-100 pb-2"
            : "opacity-0 max-h-0 overflow-hidden duration-500"
        } `}
      >
        <QuantityWisePrice
          setQuantityOpen={setQuantityOpen}
          countryWiseChanges={countryWiseChanges}
        />
      </div>
    </div>
  );
};

export default memo(MobileCart);
