import React from "react";
import { numbercounter } from "@/utilities/number-counter";

interface NumberCounterProps {
    id: number;
    number: number;
    sign: string;
    text: string;
}

const NumberCounter = ({ id, number, sign, text }: NumberCounterProps) => {
    return (
        <div>
            {numbercounter.map((item) => (
                <div key={item.id}>
                    <p>{item.number} + {item.text}</p>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default NumberCounter;
