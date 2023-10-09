import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useEyebrowHeadingAnimation(eyebrow, heading) {
    const [eyebrowsWithSpans, setEyebrowsWithSpans] = useState([]);
    const [headingWithSpans, setHeadingWithSpans] = useState([]);

    useEffect(() => {
        const animateText = (text, toggleEyebrowClass) => {
            const words = text.split(' ');

            return words.map((word, index) => (
                <motion.span
                    className={toggleEyebrowClass && 'eyebrow'}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, amount: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    key={index}
                >
                    {word}
                    {index !== words.length - 1 ? '\u2002' : ''}
                </motion.span>
            ));
        };

        const animatedEyebrows = animateText(eyebrow, true);
        setEyebrowsWithSpans(animatedEyebrows);

        let startDelay = eyebrow.split(' ').length;

        const animatedHeading = animateText(heading);
        setHeadingWithSpans(animatedHeading);

        startDelay += heading.split(' ').length;

        // Return a cleanup function if needed
        return () => {
            // Cleanup code here (if needed)
        };
    }, [eyebrow, heading]);

    return { eyebrowsWithSpans, headingWithSpans };
}

export default useEyebrowHeadingAnimation;
