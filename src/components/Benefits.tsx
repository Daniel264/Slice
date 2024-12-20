import { benefits} from "@/utilities/yellow-text";
import { Badge } from "./Badge";
import { HeroSection } from "./Hero-section-Template";
import BenefitsCards from "./BenefitsCards";
import { images } from "@/utilities/benefits-card";

export const Benefits = () => {
    return (
        <section data-section="trois" className="benefits-component">
            <div className="benefits-component__container">
                <div className="badge-div">
                    <Badge>Benefits</Badge>
                </div>
                <h1>
                    More Accessible and secure <br /> than going solo
                </h1>

                <div>
                    <HeroSection flexDirection={"row"} designedText={false} src={"/assets/images/third-section.svg"} arrayName={benefits} padding={""} />
                </div>
            </div>
            <BenefitsCards images={images} />
        </section>
    );
};
