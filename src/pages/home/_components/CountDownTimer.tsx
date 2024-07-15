import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-07-16T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        timerComponents.push(
            <span key={interval} className="text-lg">
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Hurry Up! Offer ends in:</h4>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;
