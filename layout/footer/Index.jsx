import React from 'react';
import styled from 'styled-components';
import { Container as ContainerStyles } from '@/styles/Utilities';

const Container = styled.div`
    width: 100vw;
    background-color: #000;
    padding: 80px 0;
`;

const InnerContainer = styled.div`
    ${ContainerStyles}
`;

const LinkList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinkItem = styled.li`
    a {
    }
`;

const IconSection = styled.div``;

const IconLink = styled.a`
    svg {
    }
`;

export default function Footer({ iconLinks }) {
    return (
        <Container>
            <InnerContainer>
                <LinkList>
                    {/* {links.map((link, index) => {
                        return (
                            <LinkItem key={index}>
                                <a href={link.href} target={link.target}>
                                    {link.text}
                                </a>
                            </LinkItem>
                        );
                    })} */}
                </LinkList>
            </InnerContainer>
        </Container>
    );
}
