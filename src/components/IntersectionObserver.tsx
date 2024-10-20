import React, { useEffect, useRef, useState } from "react";

const IntersectionObserver = (options) => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observer(ref.current);
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
