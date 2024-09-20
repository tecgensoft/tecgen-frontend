// import { useEffect, useState } from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { useCategories } from "../../hooks/useCategories";
// import Image from "../shared/Image";
// import TopBar from "./TopBar";
// import User from "./User";
// import Search from "./search";
// import "./style.css";
// const ignoreRoutes = ["/"];
// export default function Header() {
//   const { category } = useCategories();
//   const [isShow, setIsShow] = useState(false);
//   const navigation = useNavigate();
//   // const auth = useAppSelector(state => state.auth)
//   // console.log(auth)
//   const { pathname } = useLocation();
//   useEffect(() => {
//     const isRouteMatch = ignoreRoutes.findIndex((route) => route !== pathname);
//     if (isRouteMatch >= 0) {
//       setIsShow(false);
//     } else {
//       setIsShow(true);
//     }
//   }, [pathname]);

//   // console.log(isShow)

//   return (
//     <header>
//       <div
//         className={`${
//           isShow ? "block" : "hidden"
//         } border-b border-white-light bg-light`}
//       >
//         <div className="container py-2 hidden md:block">
//           <TopBar />
//         </div>
//       </div>
//       <div className="bg-white shadow-md border-b border-white-light">
//         <div
//           className={`container flex items-center ${isShow ? "py-7" : "py-3"} `}
//         >
//           {/* Logo */}
//           <div className="w-3/12 hidden md:block">
//             <Image
//               src={logo}
//               alt="Tecgen"
//               onClick={() => navigation("/")}
//               className="cursor-pointer "
//             />
//           </div>
//           {/* Search */}
//           <div className="flex items-center w-6/12">
//             <Search />
//           </div>
//           {/* Wishlist, Cart, User profile */}
//           <div className="w-3/12 flex items-center justify-end gap-6">
//             {/* <Button className="relative group hover:scale-[1.02] duration-100">
//               <AiOutlineHeart
//                 className={`text-[28px]  ${location.pathname === "/profile/wishlist"
//                     ? "text-primary"
//                     : "text-gray"
//                   } cursor-pointer hover:scale-110 duration-300`}
//               />
//             </Button> */}
//             <Link to="/cart">
//               <div className="relative group text-[24px] duration-100   text-gray">
//                 <div className="absolute left-5 -top-[8px]">
//                   <p className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xsm font-semibold  text-white">
//                     {0}
//                   </p>
//                 </div>
//                 <FaCartShopping />
//               </div>
//             </Link>
//             <User />
//           </div>
//         </div>
//       </div>
//       <div className={`bg-white shadow-md ${isShow ? " hidden" : "block"}`}>
//         <div className={`container`}>
//           <ul className="headerCategories">{category}</ul>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCategories } from "../../hooks/useCategories";
import Image from "../shared/Image";
import TopBar from "./TopBar";
import User from "./User";
import Search from "./search";
import "./style.css";
import { BottomMenu } from "../bottomMenu";

const ignoreRoutes = ["/"];

export default function Header() {
  const { category } = useCategories();
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  // Handle scroll event to add "fixed" class
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isRouteMatch = ignoreRoutes.findIndex((route) => route !== pathname);
    if (isRouteMatch >= 0) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname]);

  return (
    <header>
      {/* Top bar for tablet/desktop */}
      <div
        className={`${
          isShow ? "block" : "hidden"
        } border-b border-white-light bg-light`}
      >
        <div className="container py-2 hidden md:block  ">
          <TopBar />
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-white shadow-md border-b border-white-light w-full z-50 transform ${
          isFixed ? "fixed top-0 left-0 " : "relative"
        }`}
        style={{
          transition: "top 0.3s ease, padding 0.3s ease", // Smooth transition for top and padding
        }}
      >
        <div
          className={`container flex items-center ${
            isFixed ? "md:py-5 py-2" : "md:py-3 py-1"
          } `}
        >
          {/* Logo */}
          <div className="w-3/12 hidden md:block">
            <Image
              src={logo}
              alt="Tecgen"
              onClick={() => navigation("/")}
              className="cursor-pointer"
            />
          </div>

          {/* Search */}
          <div className="flex items-center lg:w-6/12">
            <Search />
          </div>

          {/* Wishlist, Cart, User profile - Desktop/Tablet */}
          <div className="w-3/12  items-center justify-end gap-6 hidden md:flex">
            <Link to="/cart">
              <div className="relative group text-[24px] duration-100 text-gray">
                <div className="absolute left-5 -top-[8px]">
                  <p className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xsm font-semibold text-white">
                    {0}
                  </p>
                </div>
                <FaCartShopping />
              </div>
            </Link>
            <User />
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className={`bg-white shadow-md ${isShow ? "hidden" : "block"}`}>
        <div className={`container`}>
          <ul className="headerCategories">{category}</ul>
        </div>
      </div>

      {/* Mobile Bottom Navigation Menu */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
        <BottomMenu />
      </div>
    </header>
  );
}
