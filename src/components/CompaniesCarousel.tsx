import { FirstCarousel, SecondCarousel } from "@/utilities/carousel";
import { Key, useMemo } from "react";

export const CompaniesCarousel = () => {
    const firstDuplicatedArray = useMemo(() => [...FirstCarousel(), ...FirstCarousel(), ...FirstCarousel()], []);

    const secondDuplicatedArray = [...SecondCarousel(), ...SecondCarousel(), ...SecondCarousel()];
    return (
        <div className="companies-description">
            <h3>Helping teams at the world&apos;s best companies</h3>

            <div>
                {firstDuplicatedArray.map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <img src={company.image} alt={company.title} />
                    </div>
                ))}
            </div>
            <div>
                {secondDuplicatedArray.map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <img src={company.image} alt={company.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};
