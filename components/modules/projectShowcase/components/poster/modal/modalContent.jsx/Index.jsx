import { useEffect } from 'react';
import styled from 'styled-components';
import { MediaQueries, Container as containerStyles } from '@/styles/Utilities';
import ImgCarousel from '@/components/ui/imgCarousel/Index';
import { h3styles, pXSmall } from '@/styles/Type';
import Image from 'next/image';

const Container = styled.div`
    position: absolute;
    top: 15vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media ${MediaQueries.tablet} {
        top: 60px;
        height: unset;
    }
`;

const InnerContainer = styled.div`
    ${containerStyles}
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
    width: 100%;
    min-height: 0;
    flex-grow: 1;

    @media ${MediaQueries.desktop} {
        gap: 40px 70px;
    }

    @media ${MediaQueries.tablet} {
        display: flex;
        flex-direction: column;
        max-width: 700px;
        align-items: center;
        max-width: 980px;
        gap: 18px;
    }

    @media ${MediaQueries.mobile} {
        align-items: start;
        gap: 14px;
    }
`;

const HeadingWrapper = styled.div`
    grid-column: 1 / span 2;
`;

const Heading = styled.h3`
    ${h3styles}
    margin-bottom: 8px;
    text-align: center;

    @media ${MediaQueries.mobile} {
        text-align: start;
    }
`;

const Subheading = styled.p`
    ${pXSmall}
    text-align: center;

    @media ${MediaQueries.mobile} {
        text-align: start;
    }
`;

const StyledImgCarousel = styled(ImgCarousel)`
    width: 100%;
    overflow: hidden;
    height: fit-content;

    @media ${MediaQueries.desktop} {
        margin: auto 0;
    }

    @media ${MediaQueries.tablet} {
        margin-top: 24px;
        overflow: visible;
        height: unset;
    }
`;

/* Backup in event that carousel images do not exist */
const StyledImage = styled(Image)`
    object-fit: contain;
    margin-top: 24px;
    width: 100%;
    aspect-ratio: 902 / 483;
    min-width: 100%;
    height: auto;
    object-fit: contain;

    @media ${MediaQueries.desktop} {
        margin: auto 0;
    }

    @media ${MediaQueries.mobile} {
        aspect-ratio: unset;
        height: auto;
    }
`;

const ContentUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    flex: 1;
    overflow: auto;
    min-height: 0;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    padding-bottom: 30px;
    padding-right: 5px;
    z-index: 2;

    @media ${MediaQueries.desktop} {
        margin: auto 0;
        list-style: disclosure-closed;
        padding-left: 15px;
        gap: 24px;
    }

    @media ${MediaQueries.tablet} {
        margin-top: 14px;
    }

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
    color: #fff;
    position: relative;

    @media ${MediaQueries.tablet} {
        color: #000;
        padding: 8px 18px;
    }

    @media ${MediaQueries.tablet} {
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
    }

    @media ${MediaQueries.tablet} {
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
                <HeadingWrapper>
                    <Heading>{heading}</Heading>
                    <Subheading>{subheading}</Subheading>
                </HeadingWrapper>
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
