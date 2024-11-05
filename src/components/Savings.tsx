import React, { useEffect } from "react";
import styled from "styled-components";
import NumberCounter from "./NumberCounter";
import { numbercounter } from "@/utilities/number-counter";
import { Badge } from "./Badge";

const StyledSpan = styled.span`
    color: #737373;
    display: block;
    text-align: left;
`;

const SmallBreak = styled.br`
  @media screen and (min-width: 768px){
    display: none;
  }
`

const AlignText = styled.div`
    text-align: left;
    width: 10%;
    justify-content: start;
    display: flex;
`;

const MainParagraph = styled.p`
  width: 30vw;
  text-align: left;

  @media screen and (max-width:768px) {
    width: 67vw;
  }
`

const H2Text = styled.h2`
    font-weight: 600;
    font-size: 2.15rem;
    line-height: 1.3;


    @media screen and (min-width: 540px) {
        font-size: 2.5rem;
    }
    @media screen and (min-width: 768px) {
        font-size: 3.3rem;
    }
`;

const SavingsWrapper = styled.section`

    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    height: max-content;
    padding: 4.5rem 2rem;
    margin-top: 5rem;
    border: 1px dashed #D4D4D4;
    border-radius: 2rem;

    article {
        h1 {
        @media screen and (max-width: 768px) {

        font-size: 2.5rem;
        }
    }
  }
`;

const Savings = () => {
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

                <MainParagraph>
                    Secure premium profits. We seamlessly provide you with the highest returns. Keep up to an extra  17.6% after taxes. some of your earnings could be exempt from local and city taxes.
                </MainParagraph>
            </article>
            {/*
            {isVisible && ( */}
            <article>
                {numbercounter.map((item) => (
                    <NumberCounter key={item.id} id={0} number={item.number} sign={item.sign} text={item.text} />
                ))}
            </article>
            {/* )} */}
        </SavingsWrapper>
    );
};

export default Savings;
