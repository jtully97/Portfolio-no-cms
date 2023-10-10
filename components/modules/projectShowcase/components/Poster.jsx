import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { variables } from '@/styles/Variables';
import { posterType } from '@/styles/Type';

const Container = styled.div`
    border: 18px solid #000;
    border-radius: 8px;
    box-shadow:
        0 0 3.2px #fff,
        0 0 3.2px #fff,
        0 0 20px #00d9ff,
        0 0 12px #00d9ff,
        0 0 3px #00d9ff,
        inset 0 0 12.8px #00d9ff;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: contain;
    flex-grow: 1;
`;

export default function Poster({ className, img, title, description }) {
    return (
        <Container className={className} id='container'>
            <StyledImage
                src={img.src}
                alt={img.alt}
                width={601}
                height={448.5}
            />
        </Container>
    );
}
