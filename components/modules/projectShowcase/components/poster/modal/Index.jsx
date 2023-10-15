import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { variables } from '@/styles/Variables';
import XIcon from './svg/XIcon.svg';

const ModalContainer = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 11;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: #000;
        opacity: 0.6;
        z-index: -1;
    }
`;

const CloseModal = styled.button`
    background-color: unset;
    border: unset;
    z-index: 100;
    position: absolute;
    top: 18px;
    right: 38px;
    cursor: pointer;
    width: 48px;
    height: 48px;

    &:hover {
        g {
            fill: blue;
        }
    }
`;

export default function Modal({ isVisible, setModalActive, children }) {
    const deactivateModal = () => {
        setModalActive(false);
    };
    return (
        <AnimatePresence>
            {isVisible && (
                <ModalContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <CloseModal onClick={deactivateModal}>
                        <XIcon />
                    </CloseModal>
                    {children}
                </ModalContainer>
            )}
        </AnimatePresence>
    );
}
