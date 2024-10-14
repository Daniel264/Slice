import { tickText } from "@/utilities/yellow-text";
import { works } from "@/utilities/yellow-text";
import { benefits } from "@/utilities/yellow-text";

export const YellowText = () => {
    return (
        <div className="yellow-container">
            {tickText.map((item: { id: number; text: string }, id: number) => (
                <div key={id}>
                    <span className="yellow-bg">{item.id}</span>
                    <span className="yellow-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
};
