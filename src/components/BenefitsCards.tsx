import Image from "next/image";
import React from "react";
import { images } from "@/utilities/benefits-card";

interface CardProps {
    images: { id: number; src: string; title: string; text: string }[];
}

const BenefitsCards = ({ images }: CardProps) => {
    return (
        <section className="benefits-card">
            {images.map((image) => (
                <div key={image.id}>
                    <Image src={image.src} alt={""} width={100} height={100} />

                    <h3>{image.title}</h3>

                    <p>{image.text}</p>
                </div>
            ))}
        </section>
    );
};

export default BenefitsCards;
