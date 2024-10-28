import React from "react";
import styled from "styled-components";
import NumberCounter from "./NumberCounter";
import { numbercounter } from "@/utilities/number-counter";
import IntersectionObserver from "./IntersectionObserver";
import { Badge } from "./Badge";

const StyledSpan = styled.span`
    color: #737373;
    display: block;
    text-align: left;
    // padding-right: 10px;
`;

const AlignText = styled.div`
    text-align: left;
    width: 10%;
    justify-content: start;
    display: flex;
`;

const H2Text = styled.h2`
    font-weight: 600;
`;

const SavingsWrapper = styled.section`

    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    height: max-content;
    padding: 2rem;
    margin-top: 5rem;
    border: 1px solid #D4D4D4;
    border-radius: 2rem;

    article {
        h1 {
        @media screen and (max-width: 768px) {
        
        font-size: 2.5rem;
        }
    }
`;

const Savings = () => {
    const [ref, isVisible] = IntersectionObserver({ threshold: 0 });
    return (
        <SavingsWrapper data-section="quatre" className="savings-wrapper">
            <AlignText>
                <div className="badge-div">
                    <Badge>Savings</Badge>
                </div>
            </AlignText>
            <article>
                <H2Text>
                    <StyledSpan>Optimise your return rate</StyledSpan> and retain more of your income
                </H2Text>

                <p>
                    Secure premium profits. We seamlessly provide you <br /> with the highest returns. Keep up to an extra <br /> 17.6% after taxes. some of your earnings could <br /> be exempt from local and city taxes.
                </p>
            </article>
            {/* 
            {isVisible && ( */}
            <article ref={ref}>
                {numbercounter.map((item) => (
                    <NumberCounter key={item.id} id={0} number={item.number} sign={item.sign} text={item.text} />
                ))}
            </article>
            {/* )} */}
        </SavingsWrapper>
    );
};

export default Savings;
