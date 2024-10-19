import React from "react";

interface NumberCounterProps {
    id: number;
    number: number;
    sign: string;
    text: string;
}

const NumberCounter = ({ id, number, sign, text }: NumberCounterProps) => {
    return (
        <div className="number-counter-component">
            <div key={id}>
                <p className="number-counter-component__number-display">{number + sign}</p>
                <p className="number-counter-component__text-display">{text}</p>
            </div>
        </div>
    );
};

export default NumberCounter;
