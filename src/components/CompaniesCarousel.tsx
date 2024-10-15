import { FirstCarousel, SecondCarousel } from "@/utilities/carousel";
import { Key } from "react";

export const CompaniesCarousel = () => {
    return (
        <div>
            <h3>Helping teams at the world&apos;s best companies</h3>

            <div>
                {FirstCarousel().map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <img src={company.image} alt={company.title} />
                    </div>
                ))}
            </div>
            <div>
                {SecondCarousel().map((company: { image: string | undefined; title: string | undefined }, index: Key | null | undefined) => (
                    <div key={index}>
                        <img src={company.image} alt={company.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};
