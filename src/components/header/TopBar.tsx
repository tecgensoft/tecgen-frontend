import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="flex justify-between ">
      <ul className="flex items-center gap-5">
        <li>
          <Link
            to="#"
            className="flex items-center gap-2 text-black-dim text-sm "
          >
            <FaPhoneAlt className="text-primary" /> <span>+880 1638627290</span>{" "}
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center gap-2 text-black-dim text-sm "
          >
            <MdEmail className="text-primary" /> <span>+880 1638627290</span>{" "}
          </Link>
        </li>
      </ul>
      <ul className="flex items-center gap-5">
        <li>
          <Link
            to="#"
            className="flex items-center gap-2 text-black-dim text-sm "
          >
            <FaLocationDot className="text-gray" /> <span>Store Location</span>{" "}
          </Link>
        </li>
        <span className="w-[1px] h-full bg-gray"></span>
        <li>
          <Link
            to="#"
            className="flex items-center gap-2 text-black-dim text-sm "
          >
            <MdEmail className="text-gray" /> <span>Track Your Order</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
