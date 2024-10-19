import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

interface NumberCounterProps {
    id: number;
    number: number;
    sign: string;
    text: string;
}

const NumberCounter = ({ id, number, sign, text }: NumberCounterProps) => {
    const numberRef = useRef<HTMLParagraphElement>(null);
    const [formattedNumber, setFormattedNumber] = useState<string>("");

    useEffect(() => {
        if (numberRef.current) {
            const options = {
                decimalPlaces: 2,
                duration: 5,
            };
            let countUp = new CountUp(numberRef.current, number, options);
            if (!countUp.error) {
                countUp.start(() => {

                    // setFormattedNumber(countUp.endVal.toFixed(options.decimalPlaces) + sign);
                    if (numberRef.current) {
                        numberRef.current.innerHTML += sign;
                    }
                });

            } else {
                console.error(countUp.error);
            }
        }
    }, [number, sign]);
    return (
        <div className="number-counter-component">
            <div key={id} style={{ "--num": number } as React.CSSProperties} className="number-counter-component__container">
                <p ref={numberRef} className="number-counter-component__number-display"></p>
                <p className="number-counter-component__text-display">{text}</p>
            </div>
        </div>
    );
};

export default NumberCounter;
