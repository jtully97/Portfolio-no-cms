import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { h2styles, PSecondary } from '@/styles/Type';
import { MediaQueries } from '@/styles/Utilities';

const Section = styled.section`
    background-color: ${variables.color3};
`;

const InnerContainer = styled.div`
    ${Container}
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;

    @media ${MediaQueries.tablet} {
        padding-top: 120px;
        padding-bottom: 120px;
        flex-direction: column-reverse;
        gap: 40px;
    }

    @media ${MediaQueries.mobile} {
        padding-top: 80px;
        padding-bottom: 80px;
        gap: 34px;
    }
`;

const TextContainer = styled.div`
    max-width: 643px;

    h2 {
        ${h2styles}
        overflow: visible;
        margin-bottom: 8px;

        span {
            display: inline-block;
        }
    }
    p {
        ${PSecondary}
    }
`;

const Img = styled.img`
    max-width: 680px;
    width: 100%;
    height: auto;
    border-radius: 24px;

    @media ${MediaQueries.tablet} {
        max-width: 520px;
    }
`;

export default function ImageContent({ data }) {
    const ref = useRef(null);
    const [wordCount, setWordCount] = useState(0);
    const [scrollPercentages, setScrollPercentages] = useState([]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center'],
    });

    useEffect(() => {
        // setWordCount(document.getElementById('heading').children.length);
        // const newScrollPercentages = [];
        // for (let i = 0; i < wordCount; i++) {
        //     const start = i / wordCount;
        //     const end = (i + 1) / wordCount;
        //     const scrollPercentage = useTransform(
        //         scrollYProgress,
        //         [start, end],
        //         [180, 0]
        //     );
        //     newScrollPercentages.push(scrollPercentage);
        // }
        // setScrollPercentages(newScrollPercentages);
        // console.log(scrollPercentages, 'wordcount');
    }, [wordCount, scrollPercentages]);

    const scrollPercentage1 = useTransform(
        scrollYProgress,
        [0.2, 0.3],
        [180, 0]
    );

    const scrollPercentageSpring1 = useSpring(scrollPercentage1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage2 = useTransform(
        scrollYProgress,
        [0.3, 0.4],
        [180, 0]
    );

    const scrollPercentageSpring2 = useSpring(scrollPercentage2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage3 = useTransform(
        scrollYProgress,
        [0.4, 0.5],
        [180, 0]
    );

    const scrollPercentageSpring3 = useSpring(scrollPercentage3, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage4 = useTransform(
        scrollYProgress,
        [0.65, 0.75],
        [0, 1000]
    );

    const scrollPercentageSpring4 = useSpring(scrollPercentage4, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const imgPercentage = useTransform(scrollYProgress, [0.4, 1], [300, 0]);

    const imgPercentageSpring = useSpring(imgPercentage, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const imgOpacity = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);

    const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

    const paraOpacity = useTransform(scrollYProgress, [0.55, 0.67], [0, 1]);

    // split heading into spans
    const sentenceArray = data.heading.split(' ');

    const pickPercentage = (index) => {
        switch (index) {
            case 0:
                return scrollPercentageSpring1;
            case 1:
                return scrollPercentageSpring2;
            case 2:
                return scrollPercentageSpring3;
            case 3:
                return scrollPercentageSpring4;
                break;
        }
    };

    const pickOpacity = (index) => {
        switch (index) {
            case 0:
                return opacity1;
                break;
            case 1:
                return opacity2;
                break;
            case 2:
                return opacity3;
                break;
        }
    };

    return (
        <Section ref={ref}>
            <InnerContainer>
                <TextContainer>
                    <h2 id='heading'>
                        {sentenceArray.map((item, index) => {
                            return (
                                <motion.span
                                    key={`word${index}`}
                                    id={`word${index}`}
                                    className='word'
                                    initial={{ opacity: 0 }}
                                    style={{
                                        opacity: pickOpacity(index),
                                        x: pickPercentage(index),
                                    }}
                                >
                                    {`${item}\u00A0`}
                                </motion.span>
                            );
                        })}
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        style={{
                            opacity: paraOpacity,
                        }}
                    >
                        {data.landingPageData}
                    </motion.p>
                </TextContainer>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    style={{
                        translateY: imgPercentageSpring,
                        opacity: imgOpacity,
                        translateX: pickPercentage(3),
                    }}
                >
                    <Img src='/Josh_Tully.png' alt='test' />
                </motion.div>
            </InnerContainer>
            x
        </Section>
    );
}
