
import { HeroSection } from "./Hero-section-Template";

export const SecondHero = () => {
    return (
        <section>
            <HeroSection flexDirection={"row-reverse"} designedText={false} src={"/assets/images/section-img.svg"} />
        </section>
    );
};
