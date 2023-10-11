import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { variables } from '@/styles/Variables';
import curtainOpenLottie from './../lottie/curtainOpenLottie.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import { useInView } from 'framer-motion';

const Container = styled.div`
    border: 18px solid #000;
    border-radius: 8px;
    /* box-shadow:
        0 0 3.2px #fff,
        0 0 3.2px #fff,
        0 0 20px #00d9ff,
        0 0 12px #00d9ff,
        0 0 3px #00d9ff,
        inset 0 0 12.8px #00d9ff; */
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const Curtains = styled.div`
    position: absolute;
    top: -25%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 135%;
    transform: translate(-13%);
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: contain;
    position: relative;
`;

export default function Poster({ className, img, title, description }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 });

    const curtainOptions = {
        animationData: curtainOpenLottie,
        loop: false,
        autoplay: false,
    };
    const { View: curtainLottie, setSpeed, play } = useLottie(curtainOptions);
    setSpeed(0.6);

    useEffect(() => {
        if (isInView) {
            play();
        }
    }, [isInView]);

    return (
        <Container className={className} id='container' ref={ref}>
            <ImageWrapper>
                <StyledImage
                    src={img.src}
                    alt={img.alt}
                    width={601}
                    height={448.5}
                />
                <Curtains>{curtainLottie}</Curtains>
            </ImageWrapper>
        </Container>
    );
}
