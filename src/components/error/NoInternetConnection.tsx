/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import networkError from "../../assets/networkError.png";

import Button from "../shared/Button";
import Image from "../shared/Image";

const NoInternetConnection = (props: { children: React.ReactNode }) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);
  const navigate = useNavigate();

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  }

  return (
    <div className=" bg-[#E6E9EB] py-4  h-screen flex justify-center items-center">
      {/* <div className="container bg-whit rounded pt-[150px] pb-[120px] items-center"> */}
      <div className="container bg-white rounded py-[250px] items-center">
        <div className="flex gap-[80px] justify-center text-center">
          <div className="flex flex-col justify-between h-full">
            <Image src={networkError} className="mx-auto" />
            <p className="text-[#2B2B2B] font-light text-xs leading-6">
              <span className="font-semibold text-[19.2px] pb-3 inline-block pt-[20px] mt-1">No Internet Connection</span> <br /> No
              internet connection was found. Check your connection or try again.
            </p>
            <div className="mt-[40px] flex items-center justify-center">
              <Button
                className="font-bold text-xs w-[105px] h-[33px] rounded-5px text-white bg-primary "
                onClick={() => {
                  navigate("/");
                }}
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoInternetConnection;
