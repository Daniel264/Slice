import { tickText } from "@/utilities/yellow-text";
import { works } from "@/utilities/yellow-text";
import { benefits } from "@/utilities/yellow-text";

interface TextProps {
    array: { id: number; text: string }[];
}

export const YellowText = ({array}: TextProps) => {
    return (
        <div className="yellow-container">
            {array.map((item: { id: number; text: string }, id: number) => (
                <div key={id}>
                    <span className="yellow-bg">{item.id}</span>
                    <span className="yellow-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
};

