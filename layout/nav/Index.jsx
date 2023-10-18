import styled from 'styled-components';
import Link from 'next/link';
import ExpandingButton from '@/components/ui/expandingButton/Index';
import { pBase } from '@/styles/Type';
import { variables } from '@/styles/Variables';
import { MediaQueries } from '@/styles/Utilities';
import { useEffect, useState } from 'react';

const NavDisplayWrapper = styled.div`
    position: fixed;
    right: ${(props) => (props.$loaded ? '25px' : '-100%')};
    top: 25px;
    z-index: ${(props) => (props.$loaded ? '10' : '-10')};
    transition: right ease-out 0.5s;

    @media ${MediaQueries.mobile} {
        right: ${(props) => (props.$loaded ? '10px' : '-100%')};
        top: 10px;
    }
`;

const StyledExpandingButton = styled(ExpandingButton)``;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    max-width: 424px;
    width: 100%;
    background-color: ${variables.color3};
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 40px 80px 68px;
`;

const Li = styled.li``;

const StyledLink = styled(Link)`
    ${pBase}
    color: ${variables.color2};
    transition: color ease-out 0.3s;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0px;
        background-color: ${variables.color1};
        transition: width ease-out 0.3s;
        left: 0;
        bottom: 0px;
    }

    &:hover {
        color: ${variables.color1};

        &:after {
            width: 100%;
        }
    }
`;

export default function Navigation({ data }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 1500);
    }, []);

    return (
        <NavDisplayWrapper $loaded={loaded}>
            <StyledExpandingButton>
                <Nav>
                    <Ul>
                        {data.links.map((link, index) => {
                            const { text, href, target } = link;

                            return (
                                <Li key={index}>
                                    <StyledLink href={href} target={target}>
                                        {text}
                                    </StyledLink>
                                </Li>
                            );
                        })}
                    </Ul>
                </Nav>
            </StyledExpandingButton>
        </NavDisplayWrapper>
    );
}
