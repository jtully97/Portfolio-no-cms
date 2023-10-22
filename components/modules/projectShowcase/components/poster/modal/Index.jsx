import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { variables } from '@/styles/Variables';
import Close from '@/components/svgJsx/close/Index';
import { MediaQueries } from '@/styles/Utilities';
import useScrollBlock from '@/customHooks/useScrollBlock';

const ModalContainer = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 11;
    width: 100vw;
    height: 100dvh;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: #000;
        opacity: 0.5;
        z-index: -1;
    }
`;

const CloseModal = styled.button`
    background-color: unset;
    border: unset;
    z-index: 100;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 34px;
    height: 34px;

    @media ${MediaQueries.mobile} {
        width: 44px;
        height: 44px;
        padding: 10px;
        right: 8px;
        top: 8px;
    }

    svg {
        polyline {
            stroke: #fff;
            transition: filter ease-out 0.35s;
        }
    }

    &:hover,
    &:focus {
        svg {
            polyline {
                filter: brightness(0.7);
            }
        }
    }
`;

export default function Modal({ isVisible, setModalActive, children }) {
    const [blockScroll, allowScroll] = useScrollBlock();

    const deactivateModal = () => {
        setModalActive(false);
    };

    useEffect(() => {
        if (isVisible) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <ModalContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <CloseModal onClick={deactivateModal}>
                        <Close />
                    </CloseModal>
                    {children}
                </ModalContainer>
            )}
        </AnimatePresence>
    );
}
