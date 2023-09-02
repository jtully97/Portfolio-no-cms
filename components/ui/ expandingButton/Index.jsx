import { useState, useEffect, createContext, useContext, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: lightgray;

    // TODO: once component has loaded run height calculations and THEN set dimensions
    ${(props) => (useContext(ExpandStateContext).loaded ? `` : '')}

    max-height: ${(props) =>
        useContext(ExpandStateContext).expanded
            ? `${
                  useContext(ExpandStateContext).childrenWrapperDimensions
                      .height
              }px`
            : '85px'};
    transition: all ease-out 0.7s;
`;

const ExpandButton = styled.button`
    width: 85px;
    height: 85px;
`;

const ChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    align-self: flex-end;
`;

const ExpandStateContext = createContext({
    expanded: null,
    childrenWrapperDimensions: {},
});

export default function ExpandingButton({ expandText, ...props }) {
    const [loaded, setLoaded] = useState(false);
    const [expanded, setExpanded] = useState(true); // onload true to calc height
    const [childrenWrapperDimensions, setChildrenWrapperDimensions] = useState({
        width: 0,
        height: 0,
    });
    const childrenWrapperRef = useRef(null);

    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    };

    useEffect(() => {
        !loaded && setExpanded(false) & setLoaded(true);
    }, []);

    useEffect(() => {
        if (childrenWrapperRef.current) {
            const height = childrenWrapperRef.current.clientHeight;
            const width = childrenWrapperRef.current.clientWidth;
            setChildrenWrapperDimensions({ width: width, height: height });

            console.log(height, ' height', width, ' width');
        }
    }, [expanded]);

    return (
        <ExpandStateContext.Provider
            value={{
                expanded: expanded,
                childrenWrapperDimensions: childrenWrapperDimensions,
                loaded: loaded,
            }}
        >
            <Container>
                <ExpandButton onClick={handleExpand} />
                <ChildrenWrapper ref={childrenWrapperRef}>
                    <CloseButton onClick={handleExpand} />
                    {props.children}
                </ChildrenWrapper>
            </Container>
        </ExpandStateContext.Provider>
    );
}
