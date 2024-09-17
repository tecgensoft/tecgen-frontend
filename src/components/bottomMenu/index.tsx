import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../../data";

export function BottomMenu(props) {
  const { pathname } = useLocation();

  const skipProductLocationForDetailsPage = pathname.split("/")[1];

  return (
    <div
      className={`${
        skipProductLocationForDetailsPage === "product-details"
          ? "hidden"
          : "fixed"
      }  bottom-0 w-full h-[72px] bg-primary py-4 px-[22px] z-[10000] drop-shadow-2xl`}
    >
      <div className="flex justify-between">
        {menu?.map((menu) => (
          <NavLink to={menu?.route} key={menu?.id}>
            <div className="relative flex flex-col justify-center items-center gap-y-2">
              <img
                src={pathname === menu?.route ? menu?.selected : menu?.icon}
                alt={menu?.value}
                className=""
              />
              {menu?.value === "Cart" && (
                <div className="absolute left-3 -top-[8px]">
                  <p className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow text-xsm font-semibold  text-black">
                    {/* {cartData?.length || 0} */}
                  </p>
                </div>
              )}

              <p
                className={`text-[11px] font-semibold ${
                  pathname === menu?.route ? "text-white" : "text-slate-gray"
                }`}
              >
                {menu?.value}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
