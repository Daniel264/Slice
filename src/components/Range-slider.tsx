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
    text-align: center;
    margin: 10px 0;
    border: none;
    outline: none;
    width: 40%;
    font-size: 4.5rem;
    // text-align: center;
    color: #d7d9ce;
    // opacity: 30;
    font-weight: bold;
`;

const StyledInputText = styled.span`
    padding-right: 1rem;
    font-size: 1rem;
    display: flex;
    font-weight: 800;
    color: #000;

    @media screen and (max-width: 768px) {
        padding-right: 0rem;
        font-size: 0.75rem;
        margin-right: -4rem;
        margin-left: -4rem;
    }
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
    transition: opacity 0.2s;

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
    text-align: right;
    color: #d7d9ce;
    font-size: 5rem;
    font-weight: 700;
    padding-left: 34px;

    @media screen and (max-width: 768px) {
        padding-left: 153px;
    }
    @media screen and (max-width: 540px) {
        padding-left: 120px;
    }
`;
const PlaceHolder = styled.section`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        justify-content: flex-end;
    }
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

const LineBreak = styled.br`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const RangeSlider: React.FC = () => {
    const [value, setValue] = useState<number>(5000);

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
                <StyledInputText>
                    I tuol interessi <LineBreak /> dopo 5 anni
                </StyledInputText>
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
