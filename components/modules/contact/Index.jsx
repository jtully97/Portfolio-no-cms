import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { h2styles, pBase, eyebrow } from '@/styles/Type';
import { variables } from '@/styles/Variables';
import Form from './form/Index';

const Container = styled.section`
    padding: 280px 0;
    width: 100vw;
    background-color: ${variables.color2};
    position: relative;

    @media ${MediaQueries.tablet} {
        padding: 180px 0;
    }

    @media ${MediaQueries.mobile} {
        padding: 140px 0;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 70%;
        background: #ffffff00;
        background: -webkit-linear-gradient(
            bottom,
            #ffffff00,
            ${variables.black}
        );
        background: -moz-linear-gradient(bottom, #ffffff00, ${variables.black});
        background: linear-gradient(to top, #ffffff00, ${variables.black});
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 30%;
        background: #ffffff00;
        background: -webkit-linear-gradient(top, #ffffff00, ${variables.black});
        background: -moz-linear-gradient(top, #ffffff00, ${variables.black});
        background: linear-gradient(to bottom, #ffffff00, ${variables.black});
        z-index: 1;
    }
`;

const InnerContainer = styled.div`
    ${ContainerStyles}
    position: relative;
    display: flex;
    justify-content: space-around;
    gap: 48px;
    z-index: 2;

    @media ${MediaQueries.tablet} {
        flex-direction: column;
    }

    @media ${MediaQueries.mobile} {
        gap: 34px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 430px;
`;

const Heading = styled.h2`
    ${h2styles}

    .eyebrow {
        ${eyebrow}
    }
`;

const Subheading = styled(motion.p)`
    ${pBase}
    margin-top: 4px;

    a {
        text-decoration: underline;
    }
`;

const FormInViewProps = {
    initial: {
        y: '100%',
        opacity: 0,
        rotate: -8,
    },
    whileInView: {
        y: 0,
        opacity: 1,
        rotate: 0,
    },
    viewport: { once: true, amount: 0.2 },
    transition: {
        duration: 0.45,
        type: 'spring',
        stiffness: 50,
    },
};

const StyledForm = styled(Form)`
    max-width: 800px;
`;

export default function Contact({
    eyebrow,
    heading,
    email,
    successMessage,
    failedMessage,
}) {
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
        <Container id='contact'>
            <InnerContainer>
                <ContentContainer>
                    <Heading>
                        {eyebrowsWithSpans}
                        <br />
                        {headingWithSpans}
                    </Heading>
                    <Subheading
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.65 }}
                    >
                        Hate contact forms? Email me{' '}
                        <a href={`mailto:${email}`}>here</a>
                    </Subheading>
                </ContentContainer>
                <StyledForm
                    motionProps={FormInViewProps}
                    successMessage={successMessage}
                    failedMessage={failedMessage}
                />
            </InnerContainer>
        </Container>
    );
}
