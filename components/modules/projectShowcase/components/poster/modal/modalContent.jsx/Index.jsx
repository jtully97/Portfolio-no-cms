import { useEffect } from 'react';
import styled from 'styled-components';
import { MediaQueries, Container as containerStyles } from '@/styles/Utilities';
import ImgCarousel from '@/components/ui/imgCarousel/Index';
import { h3styles, pXSmall } from '@/styles/Type';
import Image from 'next/image';

const Container = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    ${containerStyles}
    max-width: 970px;
    height: 100%;
    width: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    min-height: 0;
    flex-grow: 1;

    @media screen and (max-height: 762px) {
        max-width: 700px;
    }

    @media ${MediaQueries.tablet} {
        align-items: start;
        max-width: 980px;
    }
`;

const ImageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Heading = styled.h3`
    ${h3styles}
    margin-bottom: 8px;
`;

const Subheading = styled.p`
    ${pXSmall}
`;

const StyledImgCarousel = styled(ImgCarousel)`
    width: 100%;
    margin-top: 24px;
`;

/* Backup in event that carousel images do not exist */
const StyledImage = styled(Image)`
    object-fit: contain;
    margin-top: 24px;
    width: 100%;

    @media ${MediaQueries.mobile} {
        height: auto;
    }
`;

const ContentUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    margin-top: 14px;
    flex: 1;
    overflow: auto;
    min-height: 0;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    padding-bottom: 30px;
    padding-right: 5px;
    z-index: 2;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    a {
        text-decoration: underline;
    }
`;

const ContentLi = styled.li`
    ${pXSmall}
    padding: 8px 18px;
    color: #000;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 14px;
        z-index: -1;
        border: 2px solid #000;
    }

    &:not(:last-of-type) {
        &::before {
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            background-color: #fff;
            left: 40px;
            bottom: -16px;
            z-index: 1;
            border-left: 2px solid #000;
            border-right: 2px solid #000;

            @media ${MediaQueries.mobile} {
                left: 34px;
            }
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
                <ImageContentWrapper>
                    <Heading>{heading}</Heading>
                    <Subheading>{subheading}</Subheading>
                    {imgs.length !== 0 ? (
                        <StyledImgCarousel imgs={imgs} />
                    ) : (
                        <StyledImage
                            width={902}
                            height={509.767}
                            src={img.src}
                            alt={img.alt}
                        />
                    )}
                </ImageContentWrapper>
                <ContentUl id='draggable-container'>
                    {content.map((item, index) => (
                        <ContentLi
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item.li }}
                        ></ContentLi>
                    ))}
                </ContentUl>
            </InnerContainer>
        </Container>
    );
}
