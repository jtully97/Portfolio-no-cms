import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { h2styles, eyebrow } from '@/styles/Type';
import useEyebrowHeadingAnimation from '@/customHooks/useEyebrowHeadingAnimation';
import Poster from './components/poster/Index';
import { motion } from 'framer-motion';

const Container = styled.section`
    width: 100%;
    min-height: 2000px;
    position: relative;
    padding: 124px 0px;

    @media ${MediaQueries.tablet} {
        background-size: 600px;
    }
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('/decorative/brick-tiled-min.jpg');
    filter: brightness(35%);
    background-repeat: repeat;
    background-size: 800px;
    background-position: center center;

    // Whole opaque overlay
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    // Top to bottom overlay
    &::before {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        height: 60%;
        background: #ffffff00;
        background: -webkit-linear-gradient(
            bottom,
            #ffffff00,
            ${variables.black}
        );
        background: -moz-linear-gradient(bottom, #ffffff00, ${variables.black});
        background: linear-gradient(to top, #ffffff00, ${variables.black});
    }
`;

const InnerContainer = styled.div`
    ${ContainerStyles}
    position: relative;
`;

const Heading = styled.h2`
    ${h2styles}
    display: inline;

    .eyebrow {
        ${eyebrow}
    }
`;

const ProjectsGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin-top: 88px;
    gap: 24px;
    justify-items: center;

    @media ${MediaQueries.tablet} {
        grid-template-columns: repeat(3, auto);
        gap: 28px;
    }

    @media ${MediaQueries.customSmallTablet} {
        grid-template-columns: repeat(2, auto);
    }

    @media ${MediaQueries.customXSTablet} {
        grid-template-columns: 1fr;
        gap: 54px;
    }
`;

const StyledPoster = styled(Poster)`
    max-width: 480px;
`;

export default function ProjectShowcase({ eyebrow, heading, projects }) {
    const [headingWithSpans, setHeadingWithSpans] = useState(null);
    const [eyebrowsWithSpans, setEyebrowsWithSpans] = useState(null);

    useEffect(() => {
        //TODO: figure out why the reusable hook for this does not work on my iphone for the last span in the heading on my phone specifically
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
    }, []);

    return (
        <Container id='projects'>
            <BackgroundImage />
            <InnerContainer>
                <Heading>
                    {eyebrowsWithSpans}
                    <br />
                    {headingWithSpans}
                </Heading>
                <ProjectsGridContainer>
                    {projects.map((project, index) => {
                        return (
                            <StyledPoster
                                img={project.img}
                                title={project.title}
                                key={index}
                            />
                        );
                    })}
                </ProjectsGridContainer>
            </InnerContainer>
        </Container>
    );
}
