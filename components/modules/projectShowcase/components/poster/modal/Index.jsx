import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

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
        opacity: 0.4;
    }
`;

const CloseModal = styled.button`
    width: 20px;
    height: 20px;
    z-index: 100;
    position: relative;
`;

export default function Modal({ isVisible, setModalActive }) {
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
                    <CloseModal onClick={deactivateModal}></CloseModal>
                </ModalContainer>
            )}
        </AnimatePresence>
    );
}
