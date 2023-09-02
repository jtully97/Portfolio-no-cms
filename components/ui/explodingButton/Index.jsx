import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { variables } from '@/styles/variables/Index';
import Close from '@/components/svg/close/Index';
import { motion } from 'framer-motion';
import { MediaQueries } from '@/styles/Utilities';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* max-height: ${(props) => (props.$loaded ? '85px' : 'unset')};
    max-width: ${(props) => (props.$loaded ? '85px' : 'unset')};
    height: ${(props) => (props.$loaded ? '85px' : 'unset')};
    width: ${(props) => (props.$loaded ? '85px' : 'unset')};
    padding: ${(props) => (props.$loaded ? 'unset' : '38px 24px')}; */
    top: 20px;
    /* right: -100%; */
    right: 0;
    z-index: 100;
    transform: rotate(-180deg);
    transition: all ease 0.4s;
    background-color: ${variables.color1};
    color: ${variables.white};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    overflow: hidden;

    &.active {
        right: 20px;
        transform: rotate(0deg);
    }

    &.expand {
        max-width: ${(props) => props.width + 100 + 'px'};
        max-height: ${(props) => props.height + 'px'};
        width: 100%;
        height: 100%;
        padding: 38px 24px;
        justify-content: flex-start;
        background-color: ${variables.color3};

        @media ${MediaQueries.mobile} {
            max-width: 97%;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
        }

        button.close {
            display: block;
        }
        button.toggle-expand {
            width: 0%;
            height: 0%;
            cursor: default;
        }

        #contentWrapper {
            margin-top: 20px;
            opacity: 1;
            scale: 1;
            height: 100%;
        }
    }

    button.close {
        display: ${(props) => (props.$loaded ? 'none' : 'block')};
        align-self: flex-end;
        width: 30px;
        height: 30px;
        background-color: unset;
        border: unset;
        cursor: pointer;
        z-index: 1;

        @media ${MediaQueries.mobile} {
            width: 45px;
            height: 45px;
        }
    }

    #contentWrapper {
        display: flex;
        position: relative;
        /* height: ${(props) => (props.$loaded ? '0px' : 'unset')};
        scale: ${(props) => (props.$loaded ? '0' : 'unset')}; */
        transition: all ease 0.4s;
        /* opacity: 0; */
        z-index: 10;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 14px;
    }

    button.toggle-expand {
        cursor: pointer;
        padding: 10px;
        background-color: unset;
        text-decoration: unset;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: unset;
        transition: all ease 0.4s;
        width: 100%;
        height: 100%;
        opacity: ${(props) => (props.$showText ? '1' : '0')};
        transition: ${(props) =>
            props.$showText ? 'all ease .4s' : 'opacity ease 0s'};

        span {
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            font-weight: 700;
            font-family: ${variables.openSans};
            font-size: 1.4rem;
            color: ${variables.white};
            transform: rotate(-15deg);
        }

        &:after {
            content: '';
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            background-color: ${variables.color2};
            position: absolute;
            width: 100%;
            height: 0;
            left: 0;
            bottom: 0;
            transition: height ease-in 0.35s;
            z-index: 0;
        }

        &:hover {
            &:after {
                height: 100%;
                transition: height ease-out 0.1s;
            }
        }
    }
`;

export default function ExplodingButton({ ...props }) {
    const [active, setActive] = useState(false);
    const [expand, setExpand] = useState(false);
    const [showText, setShowText] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        if (expand) {
            setShowText(false); // control the timing of toggling the display of button text
        } else {
            setTimeout(() => {
                setShowText(true);
            }, 400);
        }
    }, [expand]);

    useEffect(() => {
        // get popup height while it is off screen
        if (!loaded) {
            const element = document.getElementById('contentWrapper');

            const width = element.clientWidth;

            console.log(element);
            setWidth(width);

            const height = element.clientHeight;

            setHeight(height);
        }
        setLoaded(true);
    }, [loaded]);

    return (
        <Container
            // className={`${expand ? 'expand' : ''} ${loaded ? 'active' : ''} `}
            $showText={showText}
            id='floatingPopup'
            // $loaded={loaded}
            // width={width}
            // height={height}
        >
            <motion.button
                className='close'
                onClick={() => setExpand(false)}
                aria-label='close form popup'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                <Close color={variables.white} />
            </motion.button>

            <button
                aria-label={props.ariaLabel}
                className='toggle-expand'
                onClick={() => setExpand(true)}
            >
                <span>{props.text ? props.text : null}</span>
            </button>
            <div id='contentWrapper'>{props.children}</div>
        </Container>
    );
}
