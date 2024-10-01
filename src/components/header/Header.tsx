import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCategories } from "../../hooks/useCategories";
import Image from "../shared/Image";
import TopBar from "./TopBar";
import User from "./User";
import Search from "./search";
import { BottomMenu } from "../bottomMenu";
import "./style.css";
import ResponsiveSideBarMenu from "../responsiveMenu";

const ignoreRoutes = ["/"];

export default function Header() {
  const { category } = useCategories();
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isRouteMatch = ignoreRoutes.findIndex((route) => route !== pathname);
    if (isRouteMatch >= 0) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname]);

  // Handle body scroll locking when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup the class when component unmounts or menu state changes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {/* Top bar for tablet/desktop */}
      <div className={`${isShow ? "block" : "hidden"}  bg-light`}>
        <div className="container py-2 hidden md:block ">
          <TopBar />
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md w-full  transform relative z-30">
        <div className="container flex items-center md:py-3">
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
          <div className="lg:w-6/12 hidden md:block">
            <Search />
          </div>

          {/* Wishlist, Cart, User profile - Desktop/Tablet */}
          <div className="w-3/12 items-center justify-end gap-6 hidden md:flex">
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

      {/* Top bar for mobile */}
      <div className="bg-black text-white p-4 md:hidden fixed w-full z-50">
        <div className="flex justify-between items-center">
          {/* Burger Menu */}
          <ResponsiveSideBarMenu
            isMenuOpen={isMenuOpen}
            toggleSidebar={toggleSidebar}
          />
          <button className="md:hidden text-2xl" onClick={toggleSidebar}>
            <span>☰</span> {/* Can replace this with a burger icon */}
          </button>
          {/* Logo */}
          <div className="flex-1 text-center">
            <img src={logo} alt="Logo" className="h-10 mx-auto" />
          </div>

          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch}>
              <FiSearch className="text-2xl cursor-pointer" />
            </button>

            <Link to="/cart">
              <div className="relative">
                <FiShoppingCart className="text-2xl cursor-pointer" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchVisible && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        )}
      </div>

      {/* Categories bar */}
      <div className={`bg-white shadow-md ${isShow ? "hidden" : "block"}`}>
        <div className={`container`}>
          <ul className="headerCategories">{category}</ul>
        </div>
      </div>

      {/* Mobile Bottom Navigation Menu */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg z-10">
        <BottomMenu />
      </div>
    </header>
  );
}
