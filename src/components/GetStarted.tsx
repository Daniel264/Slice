import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const GetStarted = () => {
    return (
        <section className="getStarted_section">
            <article className="getStarted_article">
                <h1>
                    Invest in real estate <br /> today and start build <br /> your wealth
                </h1>
                <Button buttonType="white_butn">Get Started</Button>
            </article>
            <div className="getStarted_image">
                <Image src="/assets/images/low-image.svg" alt="Image saying Get started" width={600} height={500} />
            </div>
        </section>
    );
};

export default GetStarted;
