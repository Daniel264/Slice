import React from "react";
import { Badge } from "./Badge";
import Image from "next/image";

const Features = () => {
    return (
        <section className="features_component">
            <div className="features_title">
                <div className="badge-div">
                    <Badge>Features</Badge>
                </div>
                <h1>
                    Real estate is the <br /> cornerstone to build <br /> your wealth.
                </h1>
            </div>
            <div className="features_content">
                <div>
                    <div className="features_image">
                        <Image src="/assets/images/features_image_one.svg" width={45} height={45} alt={"features-image"} />
                    </div>
                    <h4>Improved stability</h4>
                    <p>
                        Historically, real estate has provided <br /> lower volatility compared to stock <br /> investments.
                    </p>
                </div>
                <div>
                    <div className="features_image">
                        <Image src={"/assets/images/features_image_two.svg"} width={45} height={45} alt={"features-image-two"} />
                    </div>
                    <h4>Steady income</h4>
                    <p>
                        Generate a consistent income through <br /> renting without being correlated to the <br /> market trends.
                    </p>
                </div>
                <div>
                    <div className="features_image">
                        <Image src={"/assets/images/features_image_three.svg"} width={45} height={45} alt={"features-image-three"} />
                    </div>
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
