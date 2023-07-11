import React, { useEffect, useState } from 'react';
import'./Clock.css'

    const Clock = () => {
        const [time, setTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date());
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        const getRotationStyle = (unit, totalUnits) => {
            const rotationPercentage = (unit / totalUnits) * 360;
            return {
                transform: `rotate(${rotationPercentage}deg)`,
            };
        };

        const localTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        return (
            <div className="clock">
                <div className="number12">12</div>
                <div className="number1">1</div>
                <div className="number2">2</div>
                <div className="number3">3</div>
                <div className="number4">4</div>
                <div className="number5">5</div>
                <div className="number6">6</div>
                <div className="number7">7</div>
                <div className="number8">8</div>
                <div className="number9">9</div>
                <div className="number10">10</div>
                <div className="number11">11</div>
                <div className="hand hour" style={getRotationStyle(time.getHours() + time.getMinutes() / 60, 12)}></div>
                <div className="hand minute" style={getRotationStyle(time.getMinutes() + time.getSeconds() / 60, 60)}></div>
                <div className="hand second" style={getRotationStyle(time.getSeconds(), 60)}></div>
                <div className="digital-clock">{localTime}</div>
            </div>
    );



}
export default Clock