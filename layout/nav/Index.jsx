import styled from 'styled-components';
import Link from 'next/link';
import ExpandingButton from '@/components/ui/ expandingButton/Index';

const StyledExpandingButton = styled(ExpandingButton)`
    position: fixed;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Li = styled.li``;

export default function Navigation({ data }) {
    return (
        <StyledExpandingButton>
            <Nav>
                <Ul>
                    {data.links.map((link, index) => {
                        const { text, href, target } = link;

                        return (
                            <Li href={href} target={target} key={index}>
                                {text}
                            </Li>
                        );
                    })}
                </Ul>
            </Nav>
        </StyledExpandingButton>
    );
}
