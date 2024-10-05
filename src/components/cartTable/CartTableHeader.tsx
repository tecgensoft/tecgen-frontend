// import { BsFillTrash3Fill } from "react-icons/bs";
// import { useAppSelector } from "../../redux/hooks";
import { ICartTableHeaderProps } from "../types";

const CartTableHeader = ({
  title,
  // handleSelectAll,
  // deleteSelectedItems,
  visibleColumns,
}: // cartProduct,
// selectedItems,
ICartTableHeaderProps) => {
  // const { cartData } = useAppSelector((state) => state.cart);

  return (
    <thead className="rounded-[5px] shadow-3xl ">
      <tr className="text-left text-xs">
        {visibleColumns[0] && (
          <th className="py-4 px-5 font-light flex items-center ">
            {/* <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={selectedItems?.length === cartData?.length}
              onChange={handleSelectAll}
            /> */}
          </th>
        )}
        {visibleColumns[1] && <th className={`font-light py-4 capitalize ${visibleColumns[0] ? "px-0" : "px-8"}`}>{title}</th>}
        {visibleColumns[3] && <th className="font-light py-4 text-center capitalize">Unit Price</th>}
        {visibleColumns[2] && <th className="font-light py-4 text-center capitalize">Quantity</th>}
        {visibleColumns[4] && <th className="font-light py-4 text-center capitalize">Total Price</th>}

        {visibleColumns[5] && (
          <th>
            {/* {checkedSlug && checkedSlug?.length >= 2 && (
              <div className="flex items-center"> */}
            {/* <BsFillTrash3Fill
                  className="text-primary-dark text-xl cursor-pointer hover:text-secondary inline"
                  onClick={deleteSelectedItems}
                /> */}
            <p className="font-light leading-none text-center capitalize ">Delete</p>
            {/* </div>
            )} */}
          </th>
        )}
        {/* {visibleColumns[6] && (
          <th>
            <p className="font-light leading-none text-center capitalize ">Edit</p>
          </th>
        )} */}
      </tr>
    </thead>
  );
};

export default CartTableHeader;
