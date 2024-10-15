import Image from "next/image";

interface TextProps {
    array: { src?: string; id?: number; text?: string }[];
}

export const YellowText = ({ array }: TextProps) => {
    return (
        <div className="yellow-container">
            {array.map((item, id: number) => (
                <div key={id} className="map-div">
                    {item.src ? <Image src={item.src} alt="icon" width={10} height={10} className="yellow-bg" /> : <span className="yellow-bg">{item.id}</span>}

                    <span className="yellow-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
};
