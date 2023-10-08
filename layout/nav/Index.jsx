import styled from 'styled-components';
import Link from 'next/link';
import ExpandingButton from '@/components/ui/expandingButton/Index';
import { pBase } from '@/styles/Type';
import { variables } from '@/styles/variables/Index';

const StyledExpandingButton = styled(ExpandingButton)`
    position: fixed;
    right: 25px;
    top: 25px;
`;

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

    &:hover {
        color: ${variables.color1};
    }
`;

export default function Navigation({ data }) {
    return (
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
    );
}
