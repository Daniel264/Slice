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
        <div className="">
            <div key={id}>
                <p>
                    {number + sign}
                </p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NumberCounter;
