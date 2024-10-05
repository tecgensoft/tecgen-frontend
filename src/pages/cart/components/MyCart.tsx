import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Button from "../../../components/shared/Button";
import React from "react";
import CartTable from "../../../components/cartTable";

const MyCart: React.FC = () => {
  const navigate = useNavigate();
  const visibleColumns = [true, true, true, true, true, true, true];

  return (
    <div className="lg:bg-white mt-4 lg:pl-[65px] lg:pr-[76px] rounded pb-6">
      <div className="lg:pt-[72px]">
        <p className="font-bold lg:text-22xl text-lg leading-none lg:pb-6 pb-3">
          My Cart
        </p>
        <CartTable
          title="Product Details"
          detailsWidth="w-[300px]"
          colWidth="w-[100px]"
          visibleColumns={visibleColumns}
        />
        <Button
          className="flex items-center bg-primary mt-6 px-5 py-2 text-white text-xs rounded hover:bg-primary-dark duration-300"
          onClick={() => navigate("/")}
        >
          <HiOutlineArrowNarrowLeft className="mr-2 text-lg" /> Update Cart
        </Button>
      </div>
    </div>
  );
};

export default MyCart;
