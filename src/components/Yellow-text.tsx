interface TextProps {
    array: { src?: string; id?: number; text: string }[];
}

export const YellowText = ({ array }: TextProps) => {
    return (
        <div className="yellow-container">
            {array.map((item, id: number) => (
                <div key={id}>
                    {item.src ? <img src={item.src} alt="icon" className="yellow-bg" /> : <span className="yellow-bg">{item.id}</span>}

                    <span className="yellow-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
};
