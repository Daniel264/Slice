
import { works } from "@/utilities/yellow-text";
import { HeroSection } from "./Hero-section-Template";
import { Badge } from "./Badge";
import Image from "next/image";

export const SecondHero = () => {
    return (
        <section className="second-hero">
            <div className="badge-div">
                <Badge>How does it work</Badge>
            </div>
            <div>
                <Image className="straight-image" src={"/assets/images/Second-hero-img.svg"} alt={""} height={90} width={300}/>
                <h1>
                    Invest in income-generating <br /> real estate easily
                </h1>
            </div>
            <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} arrayName={works} />
        </section>
    );
};


