import { works } from "@/utilities/yellow-text";
import { HeroSection } from "./Hero-section-Template";
import { Badge } from "./Badge";
import Image from "next/image";

export const SecondHero = () => {
    return (
        <section data-section="deux" className="second-hero">
            <div className="badge-div">
                <Badge>How does it work</Badge>
            </div>
            <div className="second-hero__header">
                <Image className="straight-image" src={"/assets/images/Second-hero-img.svg"} alt={""} height={90} width={300} />
                <h1 className="second-hero__header-text">
                    Invest in income-generating <br /> real estate easily
                </h1>
            </div>
            <div className="second-hero__hero-duplicate">
                <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} arrayName={works} padding={"padding"} />
            </div>
        </section>
    );
};
