import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { wrap } from 'popmotion';
import styled from 'styled-components';
import { variables } from '@/styles/Variables';
import { useLottie } from 'lottie-react';
import SwipeIndicator from './lottie/SwipeIndicator.json';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
`;

const ImageWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    aspect-ratio: 902 / 483;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: ${(props) => (props.$hideSwipeIndicator ? 0 : 0.7)};
        z-index: ${(props) => (props.$hideSwipeComplete ? 0 : 2)};
        transition: opacity ease-out 1.5s;
    }
`;

const StyledImage = styled(motion.img)`
    cursor: pointer;
    aspect-ratio: 902 / 483;
    min-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow:
        rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const SwipeIndicatorContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 20px;
    width: 70%;
    height: auto;
    z-index: ${(props) => (props.$hideSwipeComplete ? 0 : 3)};
    opacity: ${(props) => (props.$hideSwipeIndicator ? 0 : 1)};
    transition: opacity ease-out 1s;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    z-index: 1;
`;

const PaginationButton = styled.button`
    background-color: unset;
    border: unset;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: filter ease-out 0.3s;
    border-radius: 50%;
    position: relative;

    &::after {
        content: '';
        background-color: ${variables.color4};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }

    &:hover {
        filter: brightness(0.7);
    }

    &::before {
        content: '';
        background-color: ${variables.color2};
        position: absolute;
        z-index: 2;
        width: 0;
        height: 0;
        margin: auto;
        top: 5%;
        left: 5%;
        right: 5%;
        bottom: 5%;
        border-radius: 50%;
        transition: all ease-out 0.2s;
    }

    &.active {
        &::before {
            width: 25%;
            height: 25%;
        }
    }
`;

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default function ImgCarousel({ className, imgs = [] }) {
    const imgWrapperRef = useRef(null);
    const isInView = useInView(imgWrapperRef, { amount: 1 });
    const [hideSwipeIndicator, setHideSwipeIndicator] = useState(false);
    const [hideSwipeComplete, setHideSwipeComplete] = useState(false);

    const swipeIndicatorOptions = {
        animationData: SwipeIndicator,
        loop: true,
        autoplay: true,
    };

    const {
        View: swipeLottie,
        setSpeed,
        play: startIndicator,
    } = useLottie(swipeIndicatorOptions);

    useEffect(() => {
        setSpeed(0.5);

        if (isInView) {
            startIndicator();

            setTimeout(() => setHideSwipeIndicator(true), 1500);
            setTimeout(() => setHideSwipeComplete(true), 2500);
        }
    }, [isInView]);

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, imgs.length, page);

    const paginate = (newDirection, index) => {
        if (index !== undefined) {
            setPage([index, index - page]);
        } else if (newDirection) {
            setPage([page + newDirection, newDirection]);
        }
    };

    return (
        <Container className={className}>
            <AnimatePresence initial={false} custom={direction}>
                <ImageWrapper
                    ref={imgWrapperRef}
                    $hideSwipeIndicator={hideSwipeIndicator}
                    $hideSwipeComplete={hideSwipeComplete}
                >
                    <SwipeIndicatorContainer
                        $hideSwipeIndicator={hideSwipeIndicator}
                        $hideSwipeComplete={hideSwipeComplete}
                    >
                        {swipeLottie}
                    </SwipeIndicatorContainer>
                    <StyledImage
                        src={imgs[imageIndex].img.src}
                        alt={imgs[imageIndex].img.alt}
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag='x'
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </ImageWrapper>
            </AnimatePresence>
            <PaginationContainer>
                {imgs.map((imgObj, index) => {
                    return (
                        <PaginationButton
                            key={index}
                            onClick={() => paginate(0, index)}
                            className={imageIndex === index && 'active'}
                        />
                    );
                })}
            </PaginationContainer>
            <div className='test'></div>
        </Container>
    );
}
