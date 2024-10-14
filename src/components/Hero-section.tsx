import { works } from "@/utilities/yellow-text";
import { YellowText } from "./Yellow-text";
import Image from "next/image";
import { Button } from "./Button";

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div>
                <h1>
                    Get Real Estate <br />
                    income, without <br />
                    owning a house
                </h1>

                <div>
                    <YellowText array={works} />
                </div>
                <div>
                    <Button>Get started</Button>
                </div>
            </div>
            <div>
                <Image src={"/assets/images/hero-img.svg"} alt={""} width={500} height={500} />
            </div>
        </section>
    );
};
