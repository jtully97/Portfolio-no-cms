import React from 'react';
import styled from 'styled-components';
import { Container as containerStyles } from '@/styles/Utilities';
import ImgCarousel from '@/components/ui/imgCarousel/Index';
import { h3styles, pXSmall } from '@/styles/Type';
import Image from 'next/image';

const Container = styled.div`
    height: 100%;
    margin-top: 60px;
`;

const InnerContainer = styled.div`
    ${containerStyles}
    height: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
`;

const Heading = styled.h3`
    ${h3styles}
    margin-bottom: 8px;
`;

const Subheading = styled.p`
    ${pXSmall}
`;

const StyledImgCarousel = styled(ImgCarousel)`
    max-width: 780px;
    width: 100%;
    margin-top: 24px;
`;

/* Backup in event that carousel images do not exist */
const StyledImage = styled(Image)``;

const Content = styled.div``;

export default function ModalContent({
    img,
    imgs,
    heading,
    subheading,
    content,
}) {
    return (
        <Container>
            <InnerContainer>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
                {imgs ? (
                    <StyledImgCarousel imgs={imgs} />
                ) : (
                    <StyledImage src={''} alt={''} />
                )}
                <Content>{content}</Content>
            </InnerContainer>
        </Container>
    );
}
