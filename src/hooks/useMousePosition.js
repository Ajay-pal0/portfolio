import { useState, useEffect } from 'react';

export const useMousePosition = (elementId = null) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (elementId) {
                const rect = e.currentTarget?.getBoundingClientRect();
                if (rect) {
                    setMousePosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    });
                }
            } else {
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        const target = elementId ? document.getElementById(elementId) : window;
        if (target) {
            target.addEventListener('mousemove', handleMouseMove);
            return () => target.removeEventListener('mousemove', handleMouseMove);
        }
    }, [elementId]);

    return mousePosition;
};
