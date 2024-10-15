import { works } from "@/utilities/yellow-text";
import { YellowText } from "./Yellow-text";
import Image from "next/image";
import { Button } from "./Button";

interface HeroProps {
    image: string;
}

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div>
                <div>
                    <h1>
                        Get Real Estate <br />
                        income, without <br />
                        owning a house
                    </h1>
                    <Image src={"/assets/images/round-text.svg"} alt={""} width={280} height={100} />
                </div>

                <div>
                    <YellowText array={works} />
                </div>
                <div>
                    <Button buttonType={"butn"}>Get started</Button>
                </div>
            </div>
            <div>
                <Image src={"/assets/images/hero-img.svg"} alt={""} width={580} height={500} />
            </div>
        </section>
    );
};
