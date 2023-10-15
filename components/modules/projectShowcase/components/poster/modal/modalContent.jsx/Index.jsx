import React from 'react';
import styled from 'styled-components';
import { MediaQueries, Container as containerStyles } from '@/styles/Utilities';
import ImgCarousel from '@/components/ui/imgCarousel/Index';
import { h3styles, pXSmall } from '@/styles/Type';
import Image from 'next/image';

const Container = styled.div`
    height: 100%;
    margin-top: 60px;
`;

const InnerContainer = styled.div`
    ${containerStyles}
    max-width: 780px;
    height: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;

    @media ${MediaQueries.tablet} {
        align-items: start;
    }
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

const ContentUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 780px;
    margin-top: 14px;
`;

const ContentLi = styled.li`
    ${pXSmall}
    padding: 8px 18px;
    background-color: #fff;
    border-radius: 14px;
    color: #000;
    position: relative;

    &:not(:last-of-type) {
        &::before {
            content: '';
            position: absolute;
            width: 14px;
            height: 16px;
            background-color: #fff;
            left: 4%;
            bottom: -14px;
        }
    }
`;

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
                <ContentUl>
                    {content.map((item, index) => (
                        <ContentLi key={index}>{item.li}</ContentLi>
                    ))}
                </ContentUl>
            </InnerContainer>
        </Container>
    );
}
