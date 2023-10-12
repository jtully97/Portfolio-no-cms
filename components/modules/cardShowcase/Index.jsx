import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { h2styles, eyebrow } from '@/styles/Type';
import { motion } from 'framer-motion';
import Card from './components/Card';
import {
    desktopWidthInt,
    tabletWidthInt,
    customSmallTabletInt,
} from '@/styles/Variables';

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

    &::before {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 30%;
        background: #ffffff00;
        background: -webkit-linear-gradient(top, #ffffff00, ${variables.black});
        background: -moz-linear-gradient(top, #ffffff00, ${variables.black});
        background: linear-gradient(to bottom, #ffffff00, ${variables.black});
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
        gap: 38px 24px;
        margin-top: 40px;
    }

    @media ${MediaQueries.customSmallTablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px 24px;
    }

    @media ${MediaQueries.customXSTablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const StyledCard = styled(Card)`
    max-width: 274px;
    width: 100%;
`;

export default function CardShowcase({ eyebrow, heading, cards }) {
    const [headingWithSpans, setHeadingWithSpans] = useState([]);
    const [eyebrowsWithSpans, setEyebrowsWithSpans] = useState([]);
    const [viewType, setViewType] = useState(null);

    const calculateDelayWGridColumns = (index, viewType) => {
        let numColumns;

        switch (viewType) {
            case 'desktop':
                numColumns = 5;
                break;
            case 'tablet':
                numColumns = 4;
                break;
            case 'customSmallTablet':
                numColumns = 3;
                break;
            case 'mobile':
            default:
                numColumns = 2;
        }

        // Calculate the delay based on the number of columns and the index
        return (index % numColumns) * 0.15;
    };

    useEffect(() => {
        const eyebrowText = eyebrow;
        const eyebrowWords = eyebrowText.split(' ');

        // I know i can consolidate this into a function...
        const eyebrowsWithSpans = eyebrowWords.map((word, index) => (
            <motion.span
                className='eyebrow'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, amount: 1 }}
                viewport={{ amount: 1 }}
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
                viewport={{ amount: 1 }}
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

        // Used for assisting in column delays for framer animations
        const windowWidth = window.innerWidth;
        if (windowWidth >= desktopWidthInt) {
            setViewType('desktop');
        } else if (windowWidth >= tabletWidthInt) {
            setViewType('tablet');
        } else if (windowWidth >= customSmallTabletInt) {
            setViewType('customSmallTablet');
        } else {
            setViewType('mobile');
        }
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

                        const delay = calculateDelayWGridColumns(
                            index,
                            viewType
                        );

                        const cardMotionProps = {
                            ...sharedMotionProps,
                            transition: {
                                ...sharedMotionProps.transition,
                                delay,
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
