import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const GetStarted = () => {
    return (
        <section>
            <article>
                <h1></h1>
                <Button buttonType="white_butn">Get Started</Button>
            </article>
            <div>
                <Image src="/assets/images/low-image.svg" alt="Image saying Get started" width={500} height={500} />
            </div>
        </section>
    );
};

export default GetStarted;
