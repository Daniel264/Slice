import React from "react";
import { Badge } from "./Badge";

const Features = () => {
    return (
        <section>
            <Badge>Features</Badge>
            <h1>
                Real estate is the <br /> cornerstone to build <br /> your wealth.
            </h1>
            <div>
                <div>
                    <h4>Improved stability</h4>
                    <p>
                        Historically, real estate has provided <br /> lower volatility compared to stock <br /> investments.
                    </p>
                </div>
                <div>
                    <h4>Steady income</h4>
                    <p>
                        Generate a consistent income through <br /> renting without being correlated to the <br /> market trends.
                    </p>
                </div>
                <div>
                    <h4>Inflation protection</h4>
                    <p>
                        Safeguard your investment against <br /> inflation with our built-in inflation <br /> protection toolset.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
