import { BsWatch } from "react-icons/bs";
import { CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { FaCalendarDay, FaCartShopping } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import image from "../../assets/image1.png";
import Button from "../../components/shared/Button";
import Image from "../../components/shared/Image";
import { useGetProductByIdQuery } from "../../redux/feature/product/productSlice";
import { goToTop } from "../../utility/goToTop";
export default function Product() {
    const { productId } = useParams()
    const params = productId?.split('=')[1]
    const { data, isLoading } = useGetProductByIdQuery({ id: params }, {
        skip: !params
    })
    if (!data) return
    const title = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    const sizes = ["S", "M", "XL", "2XL", "3XL"];
    const colors = ["#ff3a3a", "#68ff3a", "#7f3aff", "#d83aff", "#ff3a7c"];
    const { name, selling_price, rating } = data
    console.log(data)

    goToTop()
    return (
        <div>
            <div className="container py-5">
                <div className="flex gap-4">
                    <div className="w-4/12 flex flex-col gap-3 bg-skeleton-white py-3">
                        <div className="h-[380px] ">
                            <Image
                                src={image}
                                alt="product"
                                className="block mx-auto h-full"
                            />
                        </div>
                        <div className="flex gap-2 mx-auto justify-center">
                            <div className="border border-skeleton w-12 h-12 p-1">
                                <Image
                                    src={image}
                                    alt="product"
                                    className="block mx-auto h-auto"
                                />
                            </div>
                            <div className="border border-skeleton w-12 h-12 p-1">
                                <Image
                                    src={image}
                                    alt="product"
                                    className="block mx-auto h-auto"
                                />
                            </div>
                            <div className="border border-skeleton w-12 h-12 p-1">
                                <Image
                                    src={image}
                                    alt="product"
                                    className="block mx-auto h-auto"
                                />
                            </div>
                            <div className="border border-skeleton w-12 h-12 p-1">
                                <Image
                                    src={image}
                                    alt="product"
                                    className="block mx-auto h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <h1 className="text-2xl font-medium leading-8 text-black-dim">
                            {name && name}
                        </h1>
                        <div className="flex items-center gap-2 my-3">
                            <div className="flex items-center text-yellow">
                                <Rating readonly/>
                                {/* <Rating initialRating={0}
                                    emptySymbol={<FaStar className="text-slate-gray mr-1" />}
                                    fullSymbol={<FaStar className="text-[#F2AE14] mr-1" />}
                                    readonly/> */}
                                {/* <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <FiStar /> */}
                            </div>
                            <p className="text-sm text-darkGray font-medium">
                                ({rating && rating} reviews)
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <h1 className="font-bold text-[40px] text-primary">
                                ৳{selling_price && selling_price}
                            </h1>
                            <div>
                                <p className="leading-none text-sm text-yellowDark font-medium">
                                    20% Off
                                </p>
                                <h3 className="leading-none text-[22px] font-bold line-through text-darkGray">
                                    ৳905
                                </h3>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="text-black-dim">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quos ea perferendis earum
                                doloremque animi quas consequuntur. Voluptas
                                explicabo veniam voluptate fuga sapiente
                                necessitatibus consequatur.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 py-3">
                            <p>Size:-</p>
                            <div className="flex gap-3">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`${index === 0
                                            ? "bg-primary text-white"
                                            : "bg-white text-black-dim"
                                            } min-w-16 h-8 flex items-center justify-center shadow-sm rounded-[4px] font-bold text-sm `}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 py-3">
                            <p>Color:-</p>
                            <div className="flex gap-3">
                                {colors.map((color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{ backgroundColor: color }}
                                            className={`${index === 0
                                                ? "border-2 border-white"
                                                : ""
                                                } w-6 h-6 flex items-center justify-center shadow-md rounded-full font-bold text-sm `}
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black-dim shadow-sm">
                                <FiMinus />
                            </span>

                            <div className="w-12 h-8 bg-white">
                                {/* <input
                                    type="number"
                                    value={10}
                                    className="outline-none  rounded-md w-full h-full text-center shadow-sm"
                                /> */}
                            </div>
                            <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black-dim shadow-sm">
                                <FiPlus />
                            </span>
                        </div>
                        <div className="flex items-center gap-1 py-3">
                            <Button className="bg-primary text-white px-4 py-3  font-bold flex items-center gap-2 shadow-sm">
                                <FaCartShopping className="text-xl" />
                                Add to cart
                            </Button>
                            <Button className="bg-secondary text-white px-4 py-3  font-bold shadow-sm">
                                Buy now
                            </Button>
                        </div>
                    </div>
                    <div className="border border-darkGray w-3/12 h-[280px] bg-white py-5 px-5 rounded-md flex flex-col justify-center gap-3">
                        <div>
                            <h1 className="text-xl font-bold mb-2 text-[#363636]">
                                Delivery
                            </h1>
                            <div className="flex flex-col gap-1">
                                <div className="flex">
                                    <div className="w-1/12 flex justify-end">
                                        <CiLocationOn className="text-darkGray text-base" />
                                    </div>
                                    <div className="w-11/12">
                                        <p className="flex gap-2 text-darkGray text-sm pl-2">
                                            {" "}
                                            4/29 Salimullah Road, Mohammadpur,
                                            Dhaka
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/12 flex justify-end">
                                        <CiDeliveryTruck className="text-darkGray text-base" />
                                    </div>
                                    <div className="w-11/12 flex items-center">
                                        <p className="flex gap-2 text-darkGray text-sm pl-2 font-bold">
                                            {" "}
                                            Standard Delivery
                                        </p>
                                        <p className="flex gap-2 text-darkGray text-sm pl-2">
                                            {" "}
                                            ৳70-110
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/12 flex justify-end">
                                        <GiMoneyStack className="text-darkGray text-base" />
                                    </div>
                                    <div className="w-11/12">
                                        <p className="flex gap-2 text-darkGray text-sm pl-2">
                                            {" "}
                                            Cash on Delivery Available
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h1 className="text-xl font-bold mb-2 text-[#363636]">Delivery</h1>
                            <p className="flex gap-2 text-darkGray text-sm pl-2"><FaMapLocation  className="text-darkGray text-base" /> 4/29 Salimullah Road,</p>
                            <p className="flex gap-2 text-darkGray text-sm pl-2"><FaMapLocation className="text-darkGray text-base" /> Dhaka-1207</p>
                        </div> */}
                        <div>
                            <h1 className="text-xl font-bold mb-2 text-[#363636]">
                                Return & Warranty
                            </h1>
                            <ul className="text-sm text-darkGray flex flex-col gap-1 pl-2">
                                <li className="flex items-center gap-2">
                                    {" "}
                                    <FaCalendarDay className="text-darkGray text-base" />
                                    100% Authenticate
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCalendarDay className="text-darkGray text-base" />{" "}
                                    10 Days return{" "}
                                </li>
                                <li className="flex items-center gap-2 ">
                                    <BsWatch className="text-darkGray text-base" />{" "}
                                    12 months warranty
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
