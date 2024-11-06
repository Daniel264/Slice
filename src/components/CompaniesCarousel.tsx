import { FirstCarousel, SecondCarousel } from "@/utilities/carousel";
import { Key, useMemo } from "react";
import Image from "next/image";

export const CompaniesCarousel = () => {
    //Get the FirstCarousel array from utils and concatenate four of them together.
    const firstDuplicatedArray = useMemo(() => [...FirstCarousel(), ...FirstCarousel(), ...FirstCarousel(), ...FirstCarousel()], []);

    //Get the SecondCarousel array from utils and concatenate four of them together.
    const secondDuplicatedArray = [...SecondCarousel(), ...SecondCarousel(), ...SecondCarousel(), ...SecondCarousel()];
    return (
        <div
            aria-label="A company carousel animation."
            className="companies-description"
            style={{
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 15%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 85%)",
            }}
        >
            <h3>Helping teams at the world&apos;s best companies</h3>

            <div>
                {firstDuplicatedArray.map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <Image src={company.image ?? '/default-image.png'} width={100} height={100} alt={company.title ?? 'Company logo'} />
                    </div>
                ))}
            </div>
            <div>
                {secondDuplicatedArray.map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <Image width={100} height={100} src={company.image ?? '/default-image.png'} alt={company.title ?? 'Company logo'} />
                    </div>
                ))}
            </div>
        </div>
    );
};
