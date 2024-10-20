import React, { useEffect, useRef, useState } from "react";

const IntersectionObserver = (options: IntersectionObserverInit): [React.RefObject<HTMLElement>, boolean] => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new (window as any).IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};

export default IntersectionObserver;
