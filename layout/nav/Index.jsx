import ExplodingButton from '@/components/ui/explodingButton/Index';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    max-width: 500px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Ul = styled.ul``;

const Li = styled.li``;

export default function Navigation({ data }) {
    return (
        <ExplodingButton>
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
        </ExplodingButton>
    );
}
