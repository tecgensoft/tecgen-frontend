import { AiFillStar } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/image1.png";
import Image from "./Image";
export default function ProductCard() {
    // const { name, price } = props
    const title =
        "Lorem ipsum dolor sit amet consectetur";
    const selling_price = 4855;
    const discount_price = 4572;
    return (
        <div className="shadow-sm rounded-lg bg-white">
            <div>
                <div className="h-[180px]">
                    <Image
                        src={image1}
                        alt="Tecgen"
                        className="scale-90 hover:scale-95 duration-300 h-full mx-auto"
                    />
                </div>
                <div className="w-full h-fit px-3 pb-3">
                    <Link
                        to={`/product`}
                        className="text-link text-base leading-5 block"
                    >
                        {title}
                    </Link>
                    <div className="flex items-center gap-2">
                    <div className="flex items-center text-black-dim text-sm my-1">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <FiStar />
                    </div>
                    <p className="text-xs text-gray font-medium"><span>300+</span> Sold</p>
                    </div>
                    <span className="bg-primary text-white text-xs font-medium px-1 rounded-sm">
                        Deal Of the week
                    </span>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 my-1">
                            <p className="text-lg text-primary font-bold">
                                ৳{discount_price}
                            </p>
                            <p className="font-medium text-sm line-through text-[#49545A]">
                                ৳{selling_price}
                            </p>
                        </div>
                        <div className="w-10 h-10 bg-[#c9c9c9d5] rounded-full flex items-center justify-center cursor-pointer">
                            <FaCartShopping className="text-[#f3f3f3]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
