import Image from "next/image";
import React from "react";
import { images } from "@/utilities/benefits-card";

interface CardProps {
    images: {id: number; src: string;}[];
    title: string;
    text: string;
}

const BenefitsCards = ({ images, title, text }: CardProps) => {
    return (
        <div>
            <Image src={images} alt={""} width={100} height={100} />

            <h3>{title}</h3>

            <p>{text}</p>
        </div>
    );
};

export default BenefitsCards;
