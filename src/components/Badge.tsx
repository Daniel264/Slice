interface BadgeProps {
    children: string;
}

export const Badge = ({ children }: BadgeProps) => {
    return <div>{children}</div>;
};
