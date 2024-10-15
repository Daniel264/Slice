import { tickText, works } from "@/utilities/yellow-text";
import { YellowText } from "./Yellow-text";
import Image from "next/image";
import { Button } from "./Button";

interface HeroProps {
    flexDirection: string;
    designedText: boolean;
}

export const HeroSection = ({ flexDirection = "row", designedText }: HeroProps) => {
    return (
        <section className={`hero-section ${flexDirection === "row-reverse" ? "flex-row-reverse" : "flex-row"}`}>
            <div>
                <div>
                    {designedText && (
                        <h1>
                            Get Real Estate <br />
                            income, without <br />
                            owning a house
                        </h1>
                    )}
                    <Image src={"/assets/images/round-text.svg"} alt={""} width={280} height={100} className="round-img"/>
                </div>

                <div>
                    <YellowText array={tickText} />
                </div>
                <div>
                    <Button buttonType={"butn"}>Get started</Button>
                </div>
            </div>
            <div>
                <Image src={"/assets/images/hero-img.svg"} alt={""} width={580} height={500} className="hero-img"/>
            </div>
        </section>
    );
};
