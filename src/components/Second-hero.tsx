import { works } from "@/utilities/yellow-text";
import { HeroSection } from "./Hero-section-Template";
import { Badge } from "./Badge";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
// });

export const SecondHero = () => {
    return (
        <section data-scroll-container data-section="deux" className="second-hero">
            <div data-scroll-section className="badge-div">
                <Badge data-scroll>How does it work</Badge>
            </div>
            <div data-scroll-section className="second-hero__header">
                <Image className="straight-image" src={"/assets/images/Second-hero-img.svg"} alt={""} height={90} width={300} />
                <h1 data-scroll data-scroll-speed="1" className="second-hero__header-text">
                    Invest in income-generating <br /> real estate easily
                </h1>
            </div>
            <div className="second-hero__hero-duplicate">
                <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} arrayName={works} padding={"padding"} />
            </div>
        </section>
    );
};
