import React, { useState } from "react";
import styles from "styled-components";

const RangeSlider: React.FC = () => {
    const SliderContainer = styles.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    `;

    const StyledInput = styles.input`
        margin: 10px 0;
        border: none;
        outline:none;
        width: 20%;
        font-size: 4.5rem;
        text-align: center;
        color: #555;
        font-weight: bold;
    `;

    const StyledRange = styles.input`
        width: 80%;
        -webkit-appearance: none;
        appearance: none;
        height: 10px;
        border-radius: 1rem;
        background: #ddd;
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;

        &:hover {
            opacity: 1;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            background: #4CAF50;
             border-radius: 1rem;
            cursor: pointer;
        }

        &::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: #4CAF50;
            cursor: pointer;
        }
    `;

    const DollarTag = styles.span`
        color: #555;
        font-size: 5rem;
        font-weight: 700;
    `;
    const PlaceHolder = styles.section`
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
    `;

    const [value, setValue] = useState<number>(50);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <SliderContainer>
            {/* <label htmlFor="range">${value}</label> */}
            <PlaceHolder>
                <DollarTag>$</DollarTag>
                <StyledInput type="number" value={value} placeholder={"$"} onChange={handleChange} />
            </PlaceHolder>
            <StyledRange type="range" min={0} max={100} value={value} onChange={handleChange} className="range-slider rating" />
        </SliderContainer>
    );
};

export default RangeSlider;
