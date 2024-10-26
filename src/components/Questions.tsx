import React from "react";

const Questions = () => {
    return (
        <section className="questions_section">
            <h1>FAQs</h1>
            <p className="questions_section__top_text">
                All details about the item and its function can be found here. <br />
                Can&apos;t locate the solution you desire? Reach out to our crew!
            </p>
            <div className="questions_section__grid">
                <div>
                    <h4>Are you a regulated entity?</h4>
                    <p>
                        We are in the authorization process with <br /> relevant regulatory authorities. To stay updated <br /> on the project&apos;s progress, subscribe to the <br /> waiting list.
                    </p>
                </div>
                <div>
                    <h4>How can you guarantee a 7% yield?</h4>
                    <p>
                        We select properties in the most profitable <br /> cities in Italy (Milan, Turin, Genoa, Bologna, and <br /> Rome), enhance them with small renovation <br /> works, and maximize the yield. If you want to <br />
                        learn more about our process, contact us.
                    </p>
                </div>
                <div>
                    <h4>What is the applied taxation?</h4>
                    <p>
                        In the case where the investor holds an <br /> Alternative PIR (Individual Savings Plan), the <br /> product benefits from a withholding tax <br /> exemption if held for more than 5 years. <br /> Alternatively, the applied taxation is a <br /> withholding tax of 26%
                    </p>
                </div>
                <div>
                    <h4>Can I exit whenever I want?</h4>
                    <p>
                        The investor has the option to request an exit <br /> from the investment every 3 months at the <br /> market value. Part will accommodate exit <br /> requests up to a maximum of 5% each quarter. <br />
                        Liquidity is not guaranteed.
                    </p>
                </div>
                <div>
                    <h4>Is the yield net of costs?</h4>
                    <p>
                        Absolutely, the presented yields are net of <br /> investment management costs. This means <br /> that the stated returns have already factored in <br /> all associated costs, providing a transparent <br /> and accurate representation of the actual <br /> earnings you can
                        expect from your investment.
                    </p>
                </div>
                <div>
                    <h4>
                        In what type of properties do you <br /> invest?
                    </h4>
                    <p>
                        We invest in residential properties, renting <br /> them out for short and medium terms. We <br /> choose high-potential properties located near <br /> universities and points of interest.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Questions;
