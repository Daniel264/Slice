
import { works } from "@/utilities/yellow-text";
import { HeroSection } from "./Hero-section-Template";

export const SecondHero = () => {
    return (
        <section>
            <h1>
                Invest in income-generating <br /> real estate easily
            </h1>
            <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} arrayName={works} />
        </section>
    );
};


