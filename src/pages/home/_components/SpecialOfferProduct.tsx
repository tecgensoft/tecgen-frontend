import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../../assets/image1.png";
import Image from '../../../components/shared/Image';
import CountdownTimer from './CountDownTimer';

const SpecialOfferProduct: React.FC = () => {
    return (
        <div className="border-2 border-primary text-left bg-white p-5 rounded-xl">
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-medium leading-6 text-[#49545A]">Special <br /> Offer</h2>
                <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center'>
                    <h2 className="text-white text-base font-light leading-none">Save<br/> <span className='font-bold'>৳120</span></h2>
                </div>
            </div>
            <div className='h-[320px]'>
                <Image src={image1} alt='Special Offer' className='h-[90%] mx-auto block scale-95 hover:scale-105 duration-300' />
                {/* <div className='w-[80%] h-4 bg-[#2b2b2b56] mx-auto rounded-sm'></div> */}
            </div>
            <div className="product-info">
                <Link to={"#"} className="text-base font-semibold text-secondary text-center block">Game Console Controller + USB 3.0 Cable +Game Console Remote </Link>
                <div className='w-7/12 mx-auto flex items-center text-center justify-center gap-2 py-2'>
                    <p className='text-black-dim text-base line-through'>৳520</p>
                    <p className='text-primary font-bold text-xl'>৳420</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className='text-[#49545A] text-sm'>Available: <span className='font-bold '>6</span></p>
                    <p className='text-[#49545A] text-sm'>Already Sold: <span className='font-bold '>28</span></p>
                </div>
                <div className='w-full bg-light-shade h-4 rounded-full my-3'>
                    <div className='w-8/12 h-full bg-yellow rounded-full'></div>
                </div>
                <CountdownTimer />
            </div>
        </div>
    );
};

export default SpecialOfferProduct;
