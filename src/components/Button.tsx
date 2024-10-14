interface ButtonProps {
    children: string;
}

export const Button = ({ children }: ButtonProps) => {
    return <button className="butn">{children}</button>;
};
