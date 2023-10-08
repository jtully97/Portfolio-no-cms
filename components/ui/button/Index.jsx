import styled from 'styled-components';
import { variables } from '@/styles/Variables';
import { motion } from 'framer-motion';

const CustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const CustomButton = styled.button`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${variables.color1};
    border-radius: 20px;
    color: ${variables.color3};
    border: 2px solid ${variables.white};
    text-decoration: unset;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    span {
        position: relative;
        z-index: 1;
        text-transform: uppercase;
        font-weight: 700;
        font-family: ${variables.openSans};
        font-size: 1.4rem;
        color: ${variables.white};
    }

    &:after {
        content: '';
        background-color: ${variables.color2};
        position: absolute;
        width: 100%;
        height: 0;
        left: 0;
        bottom: 0;
        transition: height ease-in 0.35s;
        z-index: 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    &:hover,
    :focus {
        &:after {
            height: 100%;
            transition: height ease-out 0.1s;
        }
    }

    &:focus {
        &:after {
            transition: height ease 0.4s;
            animation: focusAnimation 1s infinite;
            animation-fill-mode: forwards;
        }
    }
`;

export default function Button({ ...props }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <CustomButtonWrapper>
                <CustomButton
                    onClick={props.onClicked}
                    type={props.type}
                    aria-label={props.ariaLabel}
                >
                    <span>{props.text}</span>
                </CustomButton>
            </CustomButtonWrapper>
        </motion.div>
    );
}
