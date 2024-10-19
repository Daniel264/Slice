import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-bottom: 0;
`;

const StyledInput = styled.input`
    margin: 10px 0;
    border: none;
    outline:none;
    width: 20%;
    font-size: 4.5rem;
    // text-align: center;
    color: #D7D9CE;
    // opacity: 30;
    font-weight: bold;
`;

const StyledInputText = styled.span`

    font-size: 1rem;
    display: flex;
    font-weight: 800;
    color: #000;
`;

const StyledRange = styled.input`
    width: 90%;
    -webkit-appearance: none;
    appearance: none;
    height: 18px;
    border-radius: 1rem;
    background: #ddd;
    outline: none;
    opacity: 1;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 35px;
        height: 35px;
        background: #000;
         border-radius: 2rem;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #000;
        cursor: pointer;
    }
`;

const DollarTag = styled.span`
    color: #D7D9CE;
    font-size: 5rem;
    font-weight: 700;
    padding-left: 8rem;
`;
const PlaceHolder = styled.section`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;
const LowerPlaceHolder = styled.section`
    width: 100%;
    align-items: end;
    justify-content: center;
    gap: 320px;

    display: flex;
    flex-direction: row;
    font-weight: 800;
`;
const HigherPlaceHolder = styled.section`
    padding-bottom: 30px;
    width: 100%;
    align-items: start;
    justify-content: center;
    gap: 280px;

    display: flex;
    flex-direction: row;
`;
const RangeSlider: React.FC = () => {
    const [value, setValue] = useState<number>(50);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <SliderContainer>
            {/* <label htmlFor="range">${value}</label> */}
            <HigherPlaceHolder>
                <StyledInputText>Capitale Investito</StyledInputText>
                <StyledInputText>$25,000</StyledInputText>
            </HigherPlaceHolder>
            <StyledRange type="range" min={0} max={10000} value={value} onChange={handleChange} className="range-slider rating" />
            <PlaceHolder>
                <StyledInputText>I tuol interessi dopo 5 anni</StyledInputText>
                <DollarTag>$</DollarTag>
                <StyledInput type="number" value={value} onChange={handleChange} />
            </PlaceHolder>
            <LowerPlaceHolder>
                <StyledInputText>Valore futuro</StyledInputText>
                <StyledInputText>$34,750</StyledInputText>
            </LowerPlaceHolder>
        </SliderContainer>
    );
};

export default RangeSlider;
