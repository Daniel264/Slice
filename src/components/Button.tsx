interface ButtonProps {
    children: string;
    buttonType: string;
}

export const Button = ({ children, buttonType }: ButtonProps) => {
    return (
        <button aria-label="A button with no action" className={`${buttonType}`}>
            {children}
        </button>
    );
};
