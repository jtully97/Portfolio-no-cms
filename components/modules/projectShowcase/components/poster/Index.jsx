import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { variables } from '@/styles/Variables';
import curtainOpenLottie from './lottie/curtainOpenLottie.json';
import { useLottie } from 'lottie-react';
import { useInView } from 'framer-motion';
import InfoIcon from '/public/svg/InfoIcon.svg';
import Modal from './modal/Index';
import ModalContent from './modal/modalContent.jsx/Index';

const Container = styled.div``;

const InnerContainer = styled.div`
    border: 18px solid #000;
    border-radius: 8px;
    position: relative;
    min-width: 100%;
    height: 100%;
    position: relative;
`;

const ModalButton = styled.button`
    background-color: unset;
    border: unset;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    cursor: pointer;
    z-index: ${(props) => (props.$visible ? 2 : 0)};
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transition:
        opacity ease-out 1.2s,
        scale ease-out 0.3s;

    &::before {
        content: '';
        position: absolute;
        width: 38px;
        height: 37px;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        right: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 18px 0 0 0;
        transition: background ease-out 0.3s;
    }

    &:hover,
    &:focus {
        &::before {
            background: rgba(255, 255, 255, 0.7);
        }
    }

    svg {
        margin-top: 3px;
        position: absolute;
        right: 5px;
        bottom: 3px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
`;

const Curtains = styled.div`
    position: absolute;
    top: -25%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 145%;
    transform: translate(-15.5%);
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: scale ease-out 0.3s;

    &.hovered {
        scale: 1.1;
    }
`;

export default function Poster({
    className,
    img,
    imgs,
    heading,
    subheading,
    content,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 });
    const [modalButtonVisible, setModalButtonVisible] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const curtainOptions = {
        animationData: curtainOpenLottie,
        loop: false,
        autoplay: false,
    };
    const {
        View: curtainLottie,
        setSpeed,
        play: openCurtains,
    } = useLottie(curtainOptions);

    useEffect(() => {
        setSpeed(0.5);

        if (isInView) {
            openCurtains();
            setTimeout(() => setModalButtonVisible(true), 1000);
        }
    }, [isInView]);

    const ActivateModal = () => {
        setModalActive(true);
    };

    const [buttonHovered, setButtonHovered] = useState();
    const buttonRef = useRef(null);

    const handleImageHover = () => {
        setButtonHovered(true);
    };

    const handleImageUnhover = () => {
        setButtonHovered(false);
    };

    return (
        <Container className={className} id='container' ref={ref}>
            <InnerContainer>
                <ImageWrapper>
                    <StyledImage
                        src={img.src}
                        alt={img.alt}
                        width={601}
                        height={448.5}
                        className={buttonHovered && 'hovered'}
                    />
                    <Curtains>{curtainLottie}</Curtains>
                </ImageWrapper>
                <ModalButton
                    $visible={modalButtonVisible}
                    onClick={ActivateModal}
                    ref={buttonRef}
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageUnhover}
                >
                    <InfoIcon />
                </ModalButton>
            </InnerContainer>
            <Modal isVisible={modalActive} setModalActive={setModalActive}>
                <ModalContent
                    img={img}
                    imgs={imgs ? imgs : img}
                    heading={heading}
                    subheading={subheading}
                    content={content}
                />
            </Modal>
        </Container>
    );
}
