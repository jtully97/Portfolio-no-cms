import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { variables } from '@/styles/Variables';
import { pSmall } from '@/styles/Type';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    border: 2px solid ${variables.color3};
    border-radius: 10px;
    padding: 44px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        z-index: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: contain;
    object-position: center;
    z-index: 1;
`;

const CardTitle = styled.h3`
    margin-top: 24px;
    ${pSmall}
    z-index: 1;
    text-align: center;
`;

export default function Card({ className, heading, motionProps, ...img }) {
    return (
        <Container className={className} {...motionProps}>
            <StyledImage
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
            ></StyledImage>
            <CardTitle>{heading}</CardTitle>
        </Container>
    );
}
