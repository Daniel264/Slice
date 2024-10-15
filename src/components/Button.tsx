interface ButtonProps {
    children: string;
    buttonType: string;
}

export const Button = ({ children, buttonType }: ButtonProps) => {
    return <button className={`${buttonType}`}>{children}</button>;
};
