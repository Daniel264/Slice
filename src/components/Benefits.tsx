import { benefits, works } from "@/utilities/yellow-text";
import { Badge } from "./Badge";
import { HeroSection } from "./Hero-section-Template";
import BenefitsCards from "./BenefitsCards";
import { images } from "@/utilities/benefits-card";

export const Benefits = () => {
    return (
        <section className="benefits-component">
            <div>
                <div className="badge-div">
                    <Badge>Benefits</Badge>
                </div>
                <h1>
                    More Accessible and secure <br /> than going solo
                </h1>

                <div>
                    <HeroSection flexDirection={"row"} designedText={false} src={"/assets/images/third-section.svg"} arrayName={benefits} />
                </div>
            </div>
            <BenefitsCards images={images} />
        </section>
    );
};
