
import { works } from "@/utilities/yellow-text";
import { HeroSection } from "./Hero-section-Template";
import { Badge } from "./Badge";

export const SecondHero = () => {
    return (
        <section>
            <div className="badge-div">
                <Badge>How does it work</Badge>
            </div>
            <h1>
                Invest in income-generating <br /> real estate easily
            </h1>
            <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} arrayName={works} />
        </section>
    );
};


