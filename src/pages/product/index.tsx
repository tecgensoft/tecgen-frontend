import { useState } from "react";
import { BsWatch } from "react-icons/bs";
import { CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { FaCalendarDay, FaCartShopping, FaStar } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Button from "../../components/shared/Button";
import { useGetProductByIdQuery } from "../../redux/feature/product/productSlice";
import { addToCart } from "../../utility/cart/cart";
import { goToTop } from "../../utility/goToTop";
import ProductImages from "./_components/ProductImage";
export default function Product() {
    const [quantity, setQuantity] = useState(1)
    const { productId } = useParams();
    const params = productId?.split("=")[1];
    const { data } = useGetProductByIdQuery(
        { id: params },
        {
            skip: !params,
        }
    );
    if (!data) return;
    const sizes = ["S", "M", "XL", "2XL", "3XL"];
    const colors = ["#ff3a3a", "#68ff3a", "#7f3aff", "#d83aff", "#ff3a7c"];
    const { id, name, selling_price, rating, images, description } = data;
    console.log(data);

    const addToCartFunc = (id, name, images) => {
        if(id && name && selling_price){
            addToCart(name, images[0], id, quantity)
        }
    }

    goToTop();
    return (
        <div>
            <div className="container py-5">
                <div className="flex gap-4">
                    <div className="w-4/12 flex flex-col gap-3">
                        <div className="h-[380px] ">
                            {/* <Image
                                src={image}
                                alt="product"
                                className="block mx-auto h-full"
                            /> */}
                            {images && <ProductImages productImages={images} />}
                        </div>
                        {/* <div className="flex gap-2 mx-auto justify-center">
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
                        </div> */}
                    </div>
                    <div className="w-5/12">
                        <h1 className="text-2xl font-medium leading-8 text-black-dim">
                            {name && name}
                        </h1>
                        <div className="flex items-center gap-2 my-3">
                            <div className="flex items-center text-yellow">
                                <Rating
                                    initialRating={rating || 0}
                                    readonly
                                    emptySymbol={
                                        <FaStar className="text-gray mr-1" />
                                    }
                                    fullSymbol={
                                        <FaStar className="text-[#F2AE14] mr-1" />
                                    }
                                />
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
                                {description && description}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 py-3">
                            <p>Size:-</p>
                            <div className="flex gap-3">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`${
                                            index === 0
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
                                            className={`${
                                                index === 0
                                                    ? "border-2 border-white"
                                                    : ""
                                            } w-6 h-6 flex items-center justify-center shadow-md rounded-full font-bold text-sm `}
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                        <div className="flex gap-1">
              <Button
                type="button"
                className={`w-30px h-30px bg-white flex items-center justify-center rounded-5px`}
                onClick={() => {
                    if (quantity > 1) setQuantity((prev) => prev - 1);
                }}
              >
                <FiMinus />
              </Button>
              <span className="w-[43px] h-30px bg-white flex items-center justify-center rounded-5px text-xs font-semibold">
                <input
                //   disabled={is_upcoming}
                  min={1}
                  className="w-[43px] text-center outline-none bg-transparent disabled:opacity-40"
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    let inputValue = parseInt(e.target.value, 10);
                    if (!isNaN(inputValue)) {
                      inputValue = Math.max(1, inputValue);
                      setQuantity(inputValue);
                    } else {
                      setQuantity(1);
                    }
                  }}
                />
              </span>
              <Button
                type="button"
                className={`w-30px h-30px 
                } bg-white flex items-center justify-center rounded-5px disabled:opacity-50 disabled:cursor-not-allowed`}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FiPlus />
              </Button>
            </div>
                            {/* <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black-dim shadow-sm">
                                <FiMinus />
                            </span>

                            <div className="w-12 h-8 bg-white">
                                
                            </div>
                            <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black-dim shadow-sm">
                                <FiPlus />
                            </span> */}
                        </div>
                        <div className="flex items-center gap-1 py-3">
                            <Button onClick={() => addToCartFunc(id, name,  images)} className="bg-primary text-white px-4 py-3  font-bold flex items-center gap-2 shadow-sm">
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
