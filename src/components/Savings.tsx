import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
    color: #737373;
    display: block;
    text-align: left;
    // padding-right: 10px;
`;

const SavingsWrapper = styled.section`

    display: flex;
    justify-content: space-between;
    height: max-content;
    align-items: center;
    padding: 2rem;
    margin-top: 5rem;
    border: 1px solid #888;
    border-radius: 2rem;

    article {
        h1 {
        @media screen and (max-width: 768px) {
        
        font-size: 2.5rem;
        }
    }
`;

const Savings = () => {
    return (
        <SavingsWrapper className="savings-wrapper">
            <article>
                <h2>
                    <StyledSpan>Optimise your return rate</StyledSpan> and retain more of your income
                </h2>

                <p>
                    Secure premium profits. We seamlessly provide you <br /> with the highest returns. Keep up to an extra <br /> 17.6% after taxes. some of your earnings could <br /> be exempt from local and city taxes.
                </p>
            </article>

            <article></article>
        </SavingsWrapper>
    );
};

export default Savings;
