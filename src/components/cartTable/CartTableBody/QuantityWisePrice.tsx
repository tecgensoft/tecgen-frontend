/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../shared/Button";
import { generateUniqueId } from "../../../utility/generateUniqueid";

const QuantityWisePrice = ({ setQuantityOpen, countryWiseChanges }: { setQuantityOpen: any; countryWiseChanges: any }) => {
  const { qtyWisePrice, quantityWisePrice } = countryWiseChanges;
  return (
    <div className="w-full flex justify-center flex-wrap gap-x-2">
      {" "}
      <div className="flex justify-center flex-wrap gap-x-2 mb-2 lg:mb-0">
        {quantityWisePrice?.map(
          (quantity: any) => (
            // quantity?.country === item?.c && (
            <div
              key={generateUniqueId()}
              className={`${
                quantity?.id === qtyWisePrice?.id ? "border border-primary-dark" : ""
              } bg-light-gray lg:py-17px py-2 text-center rounded-lg px-6 lg:w-[200px] lg:h-[72px] flex flex-col items-center justify-center`}
            >
              <p className="mb-4 text-[11px] lg:text-xs font-normal leading-none text-black-dim">{quantity?.min_quantity} or more</p>
              <h3 className="lg:text-sm text-xs text-black-dim leading-none">৳ {quantity?.selling_price}</h3>
            </div>
          )
          // )
        )}
      </div>
      <Button
        className="underline text-sm duration-500 text-black hover:text-secondary-dark ml-6 pb-2 lg:pb-0"
        onClick={() => setQuantityOpen(null)}
      >
        close
      </Button>
    </div>
  );
};
export default QuantityWisePrice;
