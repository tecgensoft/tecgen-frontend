import { AiFillStar } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/image1.png";
import { IProduct } from "../../interface/Product";
import Image from "./Image";
export default function ProductCard({ product }: { product: IProduct }) {
    // const { name, price } = props
    console.log(product)
    if(!product) return
    const { id, name, selling_price } = product
    // const title =
    //     "Lorem ipsum dolor sit amet consectetur";
    // const selling_price = 4855;
    // const discount_price = 4572;
    return (
        <div className="shadow-sm border border-white-light rounded-lg bg-white">
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
                        to={`/product_name=${name&&name}/product_id=${id}`}
                        className="text-black duration-200 hover:underline text-base leading-5 block"
                    >
                        {name && name}
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-yellow text-sm my-1">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <FiStar />
                        </div>
                        <p className="text-xs text-gray font-medium"><span>300+</span> Sold</p>
                    </div>
                    <span className="bg-secondary text-white text-xs font-medium px-1 rounded-sm">
                        Deal Of the week
                    </span>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 my-1">
                            <p className="text-lg text-primary font-bold">
                                ৳{selling_price}
                            </p>
                            <p className="font-medium text-sm line-through text-[#49545A]">
                                ৳{selling_price}
                            </p>
                        </div>
                        <div className=" rounded-full flex items-center justify-center cursor-pointer">
                            <FaCartShopping className="text-[#1d1d1d]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
