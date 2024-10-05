/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Button";
import { useAppSelector } from "../../../redux/hooks";

const TotalAmount = () => {
  const navigate = useNavigate();
  // const { checkoutTotal, checkedSlug } = useAppSelector((state) => state.cart);
  const { subTotal, cartData } = useAppSelector((state) => state.cart);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
  };

  // const closeModal = () => {
  //   setModalType(null);
  // };

  // const openSignupModal = () => {
  //   openModal("signup");
  // };

  const openSignInModal = () => {
    openModal("signin");
  };

  // const openOtpModal = () => {
  //   openModal("otp");
  // };

  const handleClick = () => {
    if (userInfo) {
      navigate("/checkout");
    } else openSignInModal();
  };

  const subtotal = cartData.reduce(
    (total: number, c: any) => total + c.sp * c.qty,
    0
  );
  const totalDiscount = cartData.reduce(
    (total: number, c: any) => total + c.d * c.qty,
    0
  );

  return (
    <div className=" bg-white mt-4 lg:pl-[65px] pl-4 pr-4 lg:pr-[76px] rounded py-10 font-sm flex flex-col lg:flex-row justify-between items-end">
      <div className="font-light text-xs order-2 lg:order-1 mt-8 lg:mt-0">
        <p className="pb-1">Note:</p>
        <p>
          1. Shipping costs may vary from country to country & weight of the
          product.*
        </p>
        <p className="mt-1">
          {" "}
          2. Charges will appear when order is being placed.
        </p>
      </div>
      <div className="lg:w-[259px] w-full text-[#6F6E77] font-medium order-1 lg:order-2">
        <div>
          <div className="flex justify-between mb-4">
            <p className="leading-none capitalize">Sub total:</p>
            <span>৳ {subtotal?.toFixed(2)} </span>
          </div>
          {/* <hr className="my-2 text-light" /> */}
          <div className="flex justify-between">
            <p className="leading-none capitalize">Discount:</p>
            <span>- ৳ {totalDiscount?.toFixed(2)} </span>
          </div>
          <hr className="mt-2 text-light" />
          <div className="flex justify-between mt-4">
            <p className="leading-none capitalize">Grand total:</p>
            <span>৳ {subTotal?.toFixed(2)} </span>
          </div>
          {/* <hr className="my-2 text-light" /> */}
          <div className="w-full mt-4">
            <Button
              // className={`w-full py-4 leading-none text-white text-base rounded font-bold ${
              //   checkedSlug && checkedSlug.length <= 0
              //     ? "cursor-not-allowed bg-red-300"
              //     : "cursor-pointer bg-secondary hover:bg-secondary-dark duration-300"
              // }`}
              className="w-full py-4 leading-none text-white text-base lg:rounded rounded-full font-bold cursor-pointer bg-secondary hover:bg-secondary-dark duration-300"
              onClick={handleClick}
              // disabled={checkedSlug && checkedSlug.length <= 0}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>

      {/* {modalType && (
        <Modal styles="w-[540px]" closeModal={closeModal}>
          {modalType === "signin" && <Signin openOtpModal={openOtpModal} />}
          {modalType === "otp" && <ContactConfirmation />}
        </Modal>
      )} */}
    </div>
  );
};

export default TotalAmount;
