import { useState, useEffect } from 'react';
import { heroData, animationSettings } from '../constants/data';

export const useTypingAnimation = () => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const { typingStrings } = heroData;
    const { typeSpeed, deleteSpeed, pauseTime } = animationSettings.typingAnimation;

    useEffect(() => {
        const currentString = typingStrings[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentString.substring(0, text.length + 1));
                if (text === currentString) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setText(currentString.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % typingStrings.length);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, currentIndex, isDeleting, typingStrings, typeSpeed, deleteSpeed, pauseTime]);

    return { text };
};
