import { FaCartShopping } from "react-icons/fa6";
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
                        <div className="w-10 h-10 bg-slate-200 text-black-dim rounded-full flex items-center justify-center cursor-pointer">
                            <FaCartShopping />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
