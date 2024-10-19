import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

interface NumberCounterProps {
    id: number;
    number: number;
    sign: string;
    text: string;
}

const NumberCounter = ({ id, number, sign, text }: NumberCounterProps) => {
    const numberRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (numberRef.current) {
            const options = {
                decimalPlaces: 2,
                duration: 5,
            };
            let demo = new CountUp("myTargetElement", 17.9, options);
            if (!demo.error) {
                demo.start();
            } else {
                console.error(demo.error);
            }
        }
    }, [number]);
    return (
        <div className="number-counter-component">
            <div key={id} style={{ "--num": number } as React.CSSProperties} className="number-counter-component__container">
                <p className="number-counter-component__number-display">{number + sign}</p>
                <p className="number-counter-component__text-display">{text}</p>
            </div>
        </div>
    );
};

export default NumberCounter;
