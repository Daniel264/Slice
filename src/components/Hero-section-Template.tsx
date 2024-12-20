import { YellowText } from "./Yellow-text";
import Image from "next/image";
import { Button } from "./Button";
import { motion } from "framer-motion";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";

// gsap.registerPlugin(SplitText);
// let mySplitText = new SplitText(".split", { type: "chars" });

interface HeroProps {
    padding: string;
    flexDirection: string;
    designedText: boolean;
    src: string;
    arrayName: { src: string; id: number; title?: string; text: string }[];
    showImage?: boolean;
}

export const HeroSection = ({ flexDirection = "row", designedText, src, arrayName, showImage, padding }: HeroProps) => {
    return (
        <section data-section="une" className={`hero-section ${flexDirection === "row-reverse" ? "flex-row-reverse" : "flex-row"}`}>
            <div>
                <motion.div
                    initial={{
                        y: 80,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                            ease: [0.44, 0, 0, 1],
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                >
                    {designedText && (
                        <h1>
                            Get Real Estate <br />
                            income, without <br />
                            owning a house
                        </h1>
                    )}
                    {showImage && <Image src={"/assets/images/round-text.svg"} alt={""} width={280} height={100} className="round-img" />}
                </motion.div>

                <div className={`yellow_text_array ${padding}`}>
                    <YellowText array={arrayName} />
                </div>
                <div>
                    <Button buttonType={"butn"}>Get started</Button>
                </div>
            </div>
            <div>
                <Image src={src} priority alt={""} width={580} height={500} className="hero-img" />
            </div>
        </section>
    );
};
