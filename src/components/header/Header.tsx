import { AiOutlineHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../shared/Button";
import Image from "../shared/Image";
import TopBar from "./TopBar";
import User from "./User";
import Search from "./search";
export default function Header() {
  const navigation = useNavigate();
  // const auth = useAppSelector(state => state.auth)
  // console.log(auth)
  return (
    <header>
      <div className="border-b border-white-light bg-light">
        <div className="container py-2">
          <TopBar />
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="container flex items-center py-7">
          {/* Logo */}
          <div className="w-3/12">
            <Image
              src={logo}
              alt="Tecgen"
              onClick={() => navigation("/")}
              className="cursor-pointer"
            />
          </div>
          {/* Search */}
          <div className="flex items-center w-6/12">
            <Search />
          </div>
          {/* Wishlist, Cart, User profile */}
          <div className="w-3/12 flex items-center justify-end gap-6">
            {/* <Button className="relative group hover:scale-[1.02] duration-100">
              <AiOutlineHeart
                className={`text-[28px]  ${location.pathname === "/profile/wishlist"
                    ? "text-primary"
                    : "text-gray"
                  } cursor-pointer hover:scale-110 duration-300`}
              />
            </Button> */}
            <Link to="/cart">
              <div className="relative group text-[24px] duration-100   text-gray">
                <div className="absolute left-5 -top-[8px]">
                  <p className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow text-xsm font-semibold  text-black">
                    {0}
                  </p>
                </div>
                <FaCartShopping />
              </div>
            </Link>
            <User/>
          </div>
        </div>
      </div>
    </header>
  );
}
