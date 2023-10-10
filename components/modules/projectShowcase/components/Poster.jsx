import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { variables } from '@/styles/Variables';
import { posterType } from '@/styles/Type';

const Container = styled.div`
    border: 24px solid #55110c;
    border-radius: 8px;
    box-shadow:
        rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const InnerContainer = styled.div`
    background-color: ${variables.black};
    border-radius: 4px;
    padding: 14px 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: contain;
    flex-grow: 1;
`;

const TitleSection = styled.div`
    background-color: ${variables.color4};
    padding: 12px 8px;
    margin-top: 18px;
    border-radius: 10px;
`;

const PosterTitle = styled.h3`
    ${posterType}
    text-align: center;
`;

export default function Poster({ className, img, title, description }) {
    return (
        <Container className={className} id='container'>
            <InnerContainer>
                <StyledImage
                    src={img.src}
                    alt={img.alt}
                    width={601}
                    height={448.5}
                />
                <TitleSection>
                    <PosterTitle>{title}</PosterTitle>
                </TitleSection>
            </InnerContainer>
        </Container>
    );
}
