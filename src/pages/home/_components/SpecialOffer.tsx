import React from 'react';
import CountdownTimer from './CountDownTimer';

const SpecialOffer: React.FC = () => {
    return (
        <div className="border p-6 m-6 text-left bg-white">
            <h2 className="text-2xl font-bold mb-2">Special Offer</h2>
            <div className="text-red-500 text-xl mb-4">Save $120</div>
            <img src="path-to-controller-image" alt="Game Console Controller" className="mb-4" />
            <div className="product-info">
                <h3 className="text-xl font-semibold">Game Console Controller + USB 3.0 Cable</h3>
                <p className="text-lg">
                    <span className="line-through text-gray-500">$99.00</span> $79.00
                </p>
                <div className="my-2">
                    <p>Available: 6</p>
                    <p>Already Sold: 28</p>
                </div>
                <CountdownTimer />
            </div>
        </div>
    );
};

export default SpecialOffer;
