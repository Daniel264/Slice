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
            <div key={id}>
                <p>
                    {number} + {text}
                </p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NumberCounter;
