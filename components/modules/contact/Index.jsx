import React from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { h2styles, pBase } from '@/styles/Type';
import { variables } from '@/styles/Variables';
import Form from './form/Index';

const Container = styled.div`
    padding: 280px 0;
    width: 100vw;
    background-color: ${variables.color2};
    position: relative;

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
`;

const Heading = styled.h2`
    ${h2styles}
`;

const Subheading = styled.p`
    ${pBase}
    margin-top: 4px;

    a {
        text-decoration: underline;
    }
`;

const StyledForm = styled(Form)`
    max-width: 800px;
`;

export default function Contact({ heading, email }) {
    return (
        <Container>
            <InnerContainer>
                <ContentContainer>
                    <Heading>{heading}</Heading>
                    <Subheading>
                        Hate contact forms? Email me{' '}
                        <a href={`mailto:${email}`}>Here</a>
                    </Subheading>
                </ContentContainer>
                <StyledForm />
            </InnerContainer>
        </Container>
    );
}
