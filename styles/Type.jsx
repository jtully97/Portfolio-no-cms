import { MediaQueries } from './Utilities';
import { css } from 'styled-components';

const lato = `'Lato', sans-serif`;
const merriweather = `'Merriweather', sans`;
const pacifico = 'Pacifico, sans-serif';

export const h1styles = css`
    font-family: ${lato};
    text-transform: uppercase;
    font-size: 9rem;
    line-height: 11rem;

    @media ${MediaQueries.tablet} {
        font-size: 8rem;
        line-height: 8.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 5.2rem;
        line-height: 5.8rem;
    }
`;

export const h2styles = css`
    font-family: ${lato};
    font-size: 5.4rem;
    line-height: 5.5rem;

    @media ${MediaQueries.tablet} {
        font-size: 4rem;
        line-height: 4.1rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 4.6rem;
        line-height: 5.8rem;
    }
`;

export const h3styles = css`
    font-family: ${lato};
    font-size: 5.2rem;
    line-height: 6.3rem;
    font-weight: 300;

    @media ${MediaQueries.tablet} {
        font-size: 4.8rem;
        line-height: 5.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3.9rem;
        line-height: 4.2rem;
    }
`;

export const h4styles = css`
    font-family: ${lato};
    font-size: 4.6rem;
    line-height: 5.4rem;
    font-weight: 300;

    @media ${MediaQueries.tablet} {
        font-size: 4.1rem;
        line-height: 5rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3.1rem;
        line-height: 3.9rem;
    }
`;

export const pLarge = css`
    font-family: ${lato};
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 300;

    @media ${MediaQueries.tablet} {
        font-size: 2rem;
        line-height: 2.2rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 1.8rem;
        line-height: 2.6rem;
    }
`;

export const pBase = css`
    font-family: ${lato};
    font-size: 1.5rem;
    line-height: 1.7rem;
    font-weight: 300;

    @media ${MediaQueries.tablet} {
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
`;

export const pSmall = css`
    font-family: ${lato};
    font-size: 1.5rem;
    line-height: 1.7rem;
    font-weight: 300;

    @media ${MediaQueries.tablet} {
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
`;

export const pXSmall = css`
    font-family: ${lato};
    font-size: 1.4rem;
    line-height: 1.9rem;
    font-weight: 300;
`;

export const buttonType = css`
    font-family: ${lato};
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
`;
