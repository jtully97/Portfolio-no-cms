import styled, { keyframes } from 'styled-components';
import { variables } from '@/styles/Variables';
import { useEffect, useState } from 'react';
import Close from '@/components/svg/close/Index';
import { glowMobile, neonderthaw } from '@/styles/Type';
import { glow } from '@/styles/Type';
import { MediaQueries } from '@/styles/Utilities';

const Container = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: ${(props) =>
        props.$active ? props.$dimensions.childWidth : '85px'};
    height: ${(props) =>
        props.$active ? props.$dimensions.childHeight : '85px'};
    transition: all ease-out 0.4s;
    overflow: hidden;
    border-radius: ${(props) => (props.$active ? '8px' : '50%')};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: ${(props) =>
        props.$active ? props.$bgColor : variables.color1};
    transform: ${(props) =>
        props.$active ? 'rotate(0deg)' : 'rotate(-15deg)'};
    border: 2px solid ${variables.color4};

    > * {
        &:focus {
            outline: 0;
            -webkit-tap-highlight-color: transparent; /* Remove the tap highlight */
        }
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${(props) => (props.$active ? '8px' : '50%')};
    opacity: ${(props) => (props.$active ? '1' : '0')};
    transition: all ease-out 0.4s;
`;

const ContentWrapper = styled.div`
    position: relative;

    > :first-child {
        scale: ${(props) => (props.$active ? '1' : '0')};
        opacity: ${(props) => (props.$active ? '1' : '0')};
        background-color: ${(props) => props.$active && props.$parentBgColor};
        transition: scale ease-out 0.4s;
    }
`;

const ExpandButton = styled.button`
    width: ${(props) => (props.$active ? '0px' : '85px')};
    height: ${(props) => (props.$active ? '0px' : '85px')};
    opacity: ${(props) => (props.$active ? '0' : '1')};
    background-color: unset;
    border: unset;
    cursor: pointer;
    transition: all ease-out 0.4s;
    flex-shrink: 0;

    &:hover {
        scale: 1.2;
    }

    span {
        color: #ffff;
        font-size: 2rem;
        font-family: ${neonderthaw};
        -webkit-animation: ${glow} 0.4s ease-in-out alternate;
        -moz-animation: ${glow} 0.4s ease-in-out alternate;
        animation: ${glow} 0.4s ease-in-out alternate;
        animation-fill-mode: forwards;
        display: block;
        margin-bottom: 8px;

        @media ${MediaQueries.mobile} {
            font-weight: 100;
            -webkit-animation: ${glowMobile} 0.4s ease-in-out alternate;
            -moz-animation: ${glowMobile} 0.4s ease-in-out alternate;
            animation: ${glowMobile} 0.4s ease-in-out alternate;
            animation-fill-mode: forwards;
        }
    }
`;

const CollapseButton = styled.button`
    margin-left: auto;
    margin-top: 24px;
    margin-right: 18px;
    background-color: unset;
    border: unset;
    cursor: pointer;

    :hover {
        polyline {
            stroke: ${variables.color1};
        }
    }

    svg {
        width: 24px;
        height: 24px;

        polyline {
            stroke: ${variables.color2};
            transition: stroke ease-out 0.3s;
        }
    }
`;

export default function ExpandingButton({ className, ...props }) {
    const [childWidth, setChildWidth] = useState(null);
    const [childHeight, setChildHeight] = useState(null);
    const [active, setActive] = useState(true);
    const [childColor, setChildColor] = useState(null);
    const [containerBgColor, setContainerBgColor] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        let container = document.getElementById('container');
        let containerComputedStyles = window.getComputedStyle(container);
        let containerBgColor = containerComputedStyles.backgroundColor;
        setContainerBgColor(containerBgColor);

        let contentWrapper = document.getElementById('content-wrapper');
        let firstChild = contentWrapper.firstChild;

        let childWidth = firstChild.clientWidth;
        let childHeight = firstChild.clientHeight;

        let collapseButton = document.getElementById('collapse-button');
        let collapseButtonHeight = collapseButton.offsetHeight;
        let collapseButtonComputedStyles =
            window.getComputedStyle(collapseButton);
        let collapseButtonMarginTop = collapseButtonComputedStyles.marginTop;

        setChildWidth(childWidth);
        setChildHeight(
            childHeight +
                collapseButtonHeight +
                parseInt(collapseButtonMarginTop, 10)
        );

        let childComputedStyles = window.getComputedStyle(firstChild);
        let childBgColor = childComputedStyles.backgroundColor;
        setChildColor(childBgColor);

        setActive(false);
    }, []);

    const toggleActive = () => {
        setActive((prevState) => !prevState);
    };

    return (
        <Container
            className={className}
            id='container'
            $active={active}
            $initialLoad={initialLoad}
            $bgColor={childColor}
            $dimensions={{
                childWidth: `${childWidth}px`,
                childHeight: `${childHeight}px`,
            }}
        >
            <ExpandButton
                onClick={toggleActive}
                id='expand-button'
                $active={active}
            >
                <span>lost?</span>
            </ExpandButton>
            <InnerContainer
                $bgColor={childColor}
                $parentBgColor={containerBgColor}
                $active={active}
            >
                <CollapseButton onClick={toggleActive} id='collapse-button'>
                    <Close />
                </CollapseButton>
                <ContentWrapper
                    $active={active}
                    $parentBgColor={containerBgColor}
                    id='content-wrapper'
                >
                    {props.children}
                </ContentWrapper>
            </InnerContainer>
        </Container>
    );
}
