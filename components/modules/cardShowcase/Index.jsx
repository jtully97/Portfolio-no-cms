import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { h2styles, eyebrow } from '@/styles/Type';
import { motion } from 'framer-motion';
import Card from './components/Card';
import { glow } from '../mainHero.jsx/Index';

const customSmallTablet = '(max-width: 772px)';

const customXSTablet = '(max-width: 646px)';

const Container = styled.section`
    background-color: ${variables.color2};
    padding: 224px 0px;
    position: relative;

    &:after {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        height: 100%;
        background: #ffffff00;
        background: -webkit-linear-gradient(
            bottom,
            #ffffff00,
            ${variables.black}
        );
        background: -moz-linear-gradient(bottom, #ffffff00, ${variables.black});
        background: linear-gradient(to top, #ffffff00, ${variables.black});
        z-index: 0;
    }
`;

const InnerContainer = styled.div`
    ${ContainerStyles}
    position: relative;
    z-index: 1;
`;

const Heading = styled.h2`
    ${h2styles}

    .eyebrow {
        ${eyebrow}
    }
`;

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* gap: 10% 4%; */
    gap: 48px 24px;
    justify-content: space-between;
    justify-items: center;
    margin-top: 68px;

    @media ${MediaQueries.tablet} {
        grid-template-columns: repeat(4, 1fr);
        gap: 6% 4%;
    }

    @media ${customSmallTablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 4% 5%;
    }

    @media ${customXSTablet} {
        grid-template-columns: repeat(2, 1fr);
        gap: 2% 6%;
    }
`;

const StyledCard = styled(Card)`
    max-width: 274px;
    width: 100%;
`;

export default function CardShowcase({ eyebrow, heading, cards }) {
    const [headingWithSpans, setHeadingWithSpans] = useState([]);
    const [eyebrowsWithSpans, setEyebrowsWithSpans] = useState([]);

    useEffect(() => {
        const eyebrowText = eyebrow;
        const eyebrowWords = eyebrowText.split(' ');

        // I know i can consolidate this into a function...
        const eyebrowsWithSpans = eyebrowWords.map((word, index) => (
            <motion.span
                className='eyebrow'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, amount: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                key={index}
            >
                {word}
                {index !== eyebrowWords.length - 1 ? '\u2002' : ''}
            </motion.span>
        ));
        setEyebrowsWithSpans(eyebrowsWithSpans);

        let startDelay = eyebrowWords.length;

        const headingText = heading;
        const headingWords = headingText.split(' ');

        const headingWordsWithSpans = headingWords.map((word, index) => (
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, amount: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{
                    duration: 1,
                    delay: (startDelay + index) * 0.15,
                }}
                key={index}
            >
                {word}
                {index !== headingWords.length - 1 ? ' ' : ''}
            </motion.span>
        ));
        // Set the state to trigger a re-render with the updated content
        setHeadingWithSpans(headingWordsWithSpans);
    }, []);

    const sharedMotionProps = {
        initial: { opacity: 0, y: 100, rotate: 8 },
        whileInView: { opacity: 1, y: 0, rotate: 0 },
        viewport: { once: true, amount: 0.85 },
        transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    };

    return (
        <Container id='skills'>
            <InnerContainer>
                <Heading id='heading'>
                    {eyebrowsWithSpans}
                    <br />
                    {headingWithSpans}
                </Heading>
                <GridSection>
                    {cards?.map((card, index) => {
                        const { img, skill } = card;
                        // Calculate the delay based on the index (adjust the multiplier as needed)
                        const delay = index * 0.15; // Adjust the multiplier to control delay

                        const cardMotionProps = {
                            ...sharedMotionProps,
                            transition: {
                                ...sharedMotionProps.transition,
                                delay, // Add the calculated delay
                            },
                        };

                        return (
                            <StyledCard
                                heading={skill}
                                motionProps={cardMotionProps}
                                {...img}
                                key={index}
                            />
                        );
                    })}
                </GridSection>
            </InnerContainer>
        </Container>
    );
}
