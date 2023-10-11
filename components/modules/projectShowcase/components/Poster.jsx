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
`;

export default function Poster({ className, img, title, description }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 });

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
