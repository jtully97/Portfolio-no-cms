import React from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { h2styles, eyebrow } from '@/styles/Type';
import useEyebrowHeadingAnimation from '@/customHooks/useEyebrowHeadingAnimation';
import Poster from './components/Poster';

const Container = styled.section`
    height: 2000px;
    width: 100%;
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
    z-index: 3;
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
    grid-template-columns: repeat(4, 1fr);
    margin-top: 88px;
    gap: 24px;
    justify-items: center;

    @media ${MediaQueries.mobile} {
        grid-template-columns: 1fr;
        gap: 54px;
    }
`;

const StyledPoster = styled(Poster)`
    max-width: 335px;
`;

export default function ProjectShowcase({ eyebrow, heading, projects }) {
    const { eyebrowsWithSpans, headingWithSpans } = useEyebrowHeadingAnimation(
        eyebrow,
        heading
    );

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
