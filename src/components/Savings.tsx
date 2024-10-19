import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
    color: #737373;
`;

const SavingsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 rem;
    margin-top: 5rem;

    article {
        h1 {
        @media screen and (max-width: 768px) {
        
        font-size: 2.5rem;
        }
    }
`;

const Savings = () => {
    return (
        <SavingsWrapper>
            <article>
                <h1>
                    <StyledSpan>Optimise your return rate</StyledSpan> and retain more of your income
                </h1>

                <p>
                    Secure premium profits. We seamlessly provide you <br /> with the highest returns. Keep up to an extra 17.6% after taxes. some of your earnings could be exempt from local and city taxes.
                </p>
            </article>

            <article></article>
        </SavingsWrapper>
    );
};

export default Savings;
