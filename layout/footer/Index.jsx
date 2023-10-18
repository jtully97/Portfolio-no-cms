import React from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles, MediaQueries } from '@/styles/Utilities';
import { variables } from '@/styles/Variables';
import { motion } from 'framer-motion';
import { pXSmall } from '@/styles/Type';

const Container = styled.div`
    width: 100vw;
    background-color: #000;
    padding: 140px 0;
    position: relative;

    @media ${MediaQueries.mobile} {
        padding: 80px 0;
    }
`;

const InnerContainer = styled.div`
    ${ContainerStyles}
`;

const LinkIconsSection = styled.div`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 24px;
`;

const MotionIconLink = styled(motion.a)`
    max-width: 40px;

    svg {
        transition: scale ease-out 0.165s;
        stop,
        g,
        path {
            transition: fill ease-out 0.35s;
        }
    }

    &:hover,
    &:focus {
        svg {
            scale: 1.15;
            stop,
            g,
            path {
                fill: ${variables.color2};
            }
        }
    }
`;

const CopyrightSection = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #00d9ff;
    padding: 12px 0;
`;

const Copyright = styled.p`
    ${pXSmall}
    color: #fff;
`;

const motionIconLinkProps = {
    initial: { opacity: 0, y: '100%' },
    whileInView: { opacity: 1, y: '0%' },
};

export default function Footer({ iconLinks }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const formattedYear = `20${currentYear % 100}`;

    return (
        <Container>
            <InnerContainer>
                <LinkIconsSection>
                    {iconLinks.map((link, index) => {
                        return (
                            <MotionIconLink
                                key={index}
                                href={link.href}
                                target='_blank'
                                {...motionIconLinkProps}
                                transition={{
                                    delay: index !== 0 ? `.${index * 2}` : '0',
                                }}
                            >
                                <link.icon />
                            </MotionIconLink>
                        );
                    })}
                </LinkIconsSection>
                <CopyrightSection>
                    <Copyright>&copy; {formattedYear} Joshua Tully</Copyright>
                </CopyrightSection>
            </InnerContainer>
        </Container>
    );
}
