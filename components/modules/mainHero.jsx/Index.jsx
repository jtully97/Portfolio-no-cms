import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/variables/Index';
import { Container } from '@/styles/Utilities';
import { pBase } from '@/styles/Type';
import { GlassEffect } from '@/styles/Utilities';
import {
    motion,
    useAnimationControls,
    useScroll,
    useTransform,
    useSpring,
} from 'framer-motion';

const glow = keyframes`
  
        /* from {
            text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 150px #0008e6,
                0 0 40px #0008e6, 0 0 50px #0008e6, 0 0 30px #0008e6,
                0 0 70px #0008e6;
        }
        to {
            text-shadow: 0 0 20px #fff, 0 0 10px #00d9ff, 0 0 20px #00d9ff,
                0 0 50px #00d9ff, 0 0 30px #00d9ff, 0 0 350px #00d9ff,
                0 0 40px #00d9ff;
        } */
        
        from {
            text-shadow: 0 0 10px #fff, 0 0 12px #fff, 0 0 15px #0008e6, 0 0 18px #0008e6, 0 0 200px #0008e6, 0 0 23px #0008e6, 0 0 26px #0008e6;
        }
  
         to {
             text-shadow: 0 0 12px #fff, 0 0 14px #00d9ff, 0 0 20px #00d9ff, 0 0 18px #00d9ff, 0 0 20px #00d9ff, 0 0 22px #00d9ff, 0 0 24px #00d9ff;
        }
`;

const Section = styled.section`
    background-color: ${variables.color2};
    width: 100vw;
    height: 100vh;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 40vh;
        background: #ffffff00;
        background: -webkit-linear-gradient(top, #ffffff00, #060011);
        background: -moz-linear-gradient(top, #ffffff00, #060011);
        background: linear-gradient(to bottom, #ffffff00, #060011);
    }
`;

const InnerSection = styled.div`
    ${Container}
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OpaqueFilter = styled.div`
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(125, 125, 125, 0) 90%,
        rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.8;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80%;
    z-index: 1;

    @media ${MediaQueries.tablet} {
        width: 100%;

        ${GlassEffect}
    }
`;

const ContentContainer = styled.div`
    z-index: 1;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    width: 900px;

    @media ${MediaQueries.mobile} {
        width: 90%;
    }

    h1 {
        text-align: center;
        display: block;

        span.large-txt {
            font-family: ${variables.joseph};
            font-size: 9rem;
            text-transform: uppercase;
            display: inline-block;

            @media (max-width: 1104px) {
                font-size: 7rem;
            }
            @media (max-width: 788px) {
                font-size: 5rem;
            }
            @media (max-width: 539px) {
                font-size: 3.5rem;
            }

            @media (max-width: 400px) {
                font-size: 2.8rem;
            }
        }

        span.cursive {
            font-family: ${variables.Pacifico};
            -webkit-animation: ${glow} 1s ease-in-out alternate;
            -moz-animation: ${glow} 1s ease-in-out alternate;
            animation: ${glow} 1s ease-in-out alternate;
            animation-fill-mode: forwards;
            font-size: 5rem;
            line-height: 93px;
            display: inline-block;

            @media (max-width: 1104px) {
                font-size: 4rem;
                line-height: 73px;
            }

            @media (max-width: 788px) {
                font-size: 3rem;
            }

            @media (max-width: 539px) {
                line-height: 55px;
            }
        }
    }
    h2 {
        ${pBase}
        text-align: center;
        margin-top: 8px;

        @media (max-width: 1104px) {
            margin-top: 4px;
        }
    }
`;

const MainHero = () => {
    // const [loaded, setLoaded] = useState(false);
    // const controls = useAnimationControls();

    // useEffect(() => {
    //     if (loaded === false) {
    //         controls.start({ x: 0, opacity: 1, scale: 1 });
    //         console.log(controls);
    //     }
    //     setLoaded(true);
    // }, [loaded]);

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ['start center', 'end start'],
        offset: ['start end', 'end start'],
    });

    // useEffect(() => {
    //     const unsubscribe = scrollYProgress.onChange((value) => {
    //         console.log(`scrollYProgress: ${value} pixels`);
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, [scrollYProgress]);

    const scrollPercentage1 = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        [0, -240]
    );
    const springPercentage1 = useSpring(scrollPercentage1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage2 = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        [0, -300]
    );
    const springPercentage2 = useSpring(scrollPercentage2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage3 = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        [0, -280]
    );
    const springPercentage3 = useSpring(scrollPercentage3, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollPercentage4 = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        [0, -180]
    );
    const springPercentage4 = useSpring(scrollPercentage4, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const opacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
    const styleControls = useAnimationControls();

    const translateX1 = useTransform(scrollYProgress, [0.5, 0.6], [0, -20]);
    const translateX2 = useTransform(scrollYProgress, [0.5, 0.6], [0, -30]);

    const translateX3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 40]);
    const translateX4 = useTransform(scrollYProgress, [0.5, 0.6], [0, 35]);

    useEffect(() => {
        setTimeout(() => {
            styleControls.start({ y: scrollPercentage1 });
        }, 300);
    }, []);

    return (
        <Section>
            <OpaqueFilter />
            <InnerSection ref={ref}>
                <ContentContainer>
                    <motion.h1>
                        <motion.span
                            className='cursive'
                            initial={{ x: -100, opacity: 0, scale: 0 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            style={{
                                y: springPercentage2,
                                opacity: opacity,
                                x: translateX1,
                            }}
                        >
                            Hello I am
                        </motion.span>
                        <br />
                        <motion.span
                            className='large-txt'
                            initial={{ x: -200, opacity: 0, scale: 0 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            style={{
                                y: springPercentage1,
                                opacity: opacity,
                                x: translateX2,
                            }}
                        >
                            Josh&nbsp;
                        </motion.span>
                        <motion.span
                            className='large-txt right'
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.7 }}
                            style={{
                                y: springPercentage3,
                                opacity: opacity,
                                x: translateX3,
                            }}
                        >
                            Tully
                        </motion.span>
                    </motion.h1>
                    <motion.h2
                        initial={{ x: 400, scale: 0, opacity: 0 }}
                        animate={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.7 }}
                        style={{
                            y: springPercentage4,
                            opacity: opacity,
                            x: translateX4,
                        }}
                    >
                        Full Stack Software Developer
                    </motion.h2>
                </ContentContainer>
            </InnerSection>
        </Section>
    );
};

export default MainHero;
