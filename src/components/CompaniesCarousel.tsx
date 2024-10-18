import { FirstCarousel, SecondCarousel } from "@/utilities/carousel";
import { Key, useMemo } from "react";
import Image from "next/image";

export const CompaniesCarousel = () => {

    //Get the FirstCarousel array from utils and concatenate four of them together. 
    const firstDuplicatedArray = useMemo(() => [...FirstCarousel(), ...FirstCarousel(), ...FirstCarousel(), ...FirstCarousel()], []);

    //Get the SecondCarousel array from utils and concatenate four of them together. 
    const secondDuplicatedArray = [...SecondCarousel(), ...SecondCarousel(), ...SecondCarousel(), ...SecondCarousel()];
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

        //First Duplicate Array
        //<Image src={company.img} alt={company.title />

        //Second Duplicate Array
        //<Image src={company.img} alt={company.title />
    );
};