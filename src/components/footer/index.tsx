import { FaFacebookF, FaRegPaperPlane, FaTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import logo from "../../assets/logo.png";
export default function Footer() {
    return (
        <footer>
            <section className="bg-primary">
                <div className="container py-4">
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center gap-3">
                            <FaRegPaperPlane className="text-3xl text-white" />
                            <h1 className="text-lg font-normal text-white">
                                Sign up to Newsletter
                            </h1>
                        </div>
                        <div>
                            <p>...and receive 20% coupon first shopping</p>
                        </div>
                        <div>
                            <div className="flex items-center bg-gray-200 border-2 border-white w-full rounded-[25px] h-[40px] lg:h-[48px] overflow-hidden">
                                <div className="flex w-full h-full relative shadow-sm lg:shadow-none">
                                    <input
                                        className="lg:bg-light outline-none placeholder:text-xs pl-4 w-full pb-1 rounded-l-[8px] focus:bg-white duration-300 pr-16 rounded-[8px] "
                                        type="text"
                                        placeholder="Enter your e-mail address"
                                        // onBlur={handleInputBlur}
                                        //   value={query}
                                        //   onChange={handleInputChange}
                                        //   onKeyDown={handleKeyDown}
                                    />
                                    <div className="absolute top-0 right-0 bg-primary  w-20 h-full flex items-center justify-center">
                                        <FiSearch className="text-xl font-bold text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-lightGray">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start py-10">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-6">
                            <img
                                src={logo}
                                alt="tecgen Logo"
                                className="mr-2"
                            />
                        </div>
                        <div className="flex gap-3 my-5">
                            <TfiHeadphoneAlt className="text-3xl text-yellow-400" />
                            <div className="">
                                <p className="text-sm mb-2 leading-none text-black-dim">
                                    Got questions? Call us 24/7!
                                </p>
                                <p className="black-dim">
                                    (800) 8001-8588, (0600) 874 548
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-black-dim mb-2">
                                Contact Info
                            </h3>
                            <p className="text-sm text-black-dim">
                                17 Princess Road, London, Greater London NW1
                                8JR, UK
                            </p>
                        </div>
                        <div className="flex gap-4 mt-6 text-2xl text-gray">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className="w-7/12 grid grid-cols-3 gap-4">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Find it Fast
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Laptops & Computers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Cameras & Photography
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Smart Phones & Tablets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Video Games & Consoles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        TV & Audio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Gadgets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Car Electronic & GPS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Laptops & Computers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Cameras & Photography
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Smart Phones & Tablets
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-semibold mb-4">
                                Customer Care
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Order Tracking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Wish List
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Customer Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Returns / Exchange
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Product Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
