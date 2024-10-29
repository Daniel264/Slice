interface ButtonProps {
    children: string;
    buttonType: string;
}

export const Button = ({ children, buttonType }: ButtonProps) => {
    return (
        <button aria-label="Button" className={`${buttonType}`}>
            {children}
        </button>
    );
};
