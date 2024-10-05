/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateUniqueId } from "../../../utility/generateUniqueid";
import Image from "../../shared/Image";

export const ShowDetails = ({ data, item }: { data: any; item: any }) => {
  return (
    <div className="flex justify-center items-center gap-x-[33px] gap-y-4 flex-wrap">
      {data?.data?.variant?.available_countries?.map(
        (country: any) =>
          country?.country?.id === item?.c && (
            <div key={country?.country?.id} className="flex items-center">
              <p className="capitalize text-sm text-silver">
                Product Origin: &nbsp;{" "}
              </p>
              <Image
                src={country?.country?.flag}
                className="w-[40px] h-[24px] rounded-5px"
              />
            </div>
          )
      )}
      {item?.attr?.map((attribute: any) => (
        <div key={generateUniqueId()} className="flex items-center">
          <p className="capitalize text-sm text-silver">
            {attribute?.name}: &nbsp;{" "}
          </p>
          <p className="capitalize text-sm text-black font-medium">
            {attribute?.value}
          </p>
        </div>
      ))}
      <div className="flex items-center">
        <p className="capitalize text-sm text-silver">Quantity: &nbsp;</p>{" "}
        <p className="text-sm text-black font-medium">{item?.qty}x</p>
      </div>
    </div>
  );
};
