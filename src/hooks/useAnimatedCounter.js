import { useState, useEffect } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export const useAnimatedCounter = (endValue, duration = 2000) => {
    const [count, setCount] = useState(0);
    const { elementRef, hasIntersected } = useIntersectionObserver();

    useEffect(() => {
        if (!hasIntersected) return;

        const numericValue = parseFloat(endValue.replace(/\D/g, ''));
        const suffix = endValue.replace(/\d/g, '');
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current) + suffix);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [endValue, duration, hasIntersected]);

    return { count, elementRef };
};
