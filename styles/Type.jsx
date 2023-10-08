import { MediaQueries } from './Utilities';
import { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const glow = keyframes`    
        from {
            text-shadow: 0 0 10px #fff, 0 0 12px #fff, 0 0 15px #0008e6, 0 0 18px #0008e6, 0 0 200px #0008e6, 0 0 23px #0008e6, 0 0 26px #0008e6;
        }
  
         to {
             text-shadow: 0 0 12px #fff, 0 0 14px #00d9ff, 0 0 20px #00d9ff, 0 0 18px #00d9ff, 0 0 20px #00d9ff, 0 0 22px #00d9ff, 0 0 24px #00d9ff;
        }
`;

const lato = `'Lato', sans-serif`;
const merriweather = `'Merriweather', sans`;
const pacifico = 'Pacifico, sans-serif';
export const neonderthaw = 'Neonderthaw, cursive';

export const eyebrow = css`
    font-family: ${neonderthaw};
    -webkit-animation: ${glow} 1s ease-in-out alternate;
    -moz-animation: ${glow} 1s ease-in-out alternate;
    animation: ${glow} 1s ease-in-out alternate;
    animation-fill-mode: forwards;
    font-size: 5rem;
    line-height: 5.6rem;
    display: inline-block;
    color: #ffff;

    @media ${MediaQueries.tablet} {
        font-size: 2.9rem;
        line-height: 2.4rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 2.4rem;
        line-height: 2rem;
    }
`;

export const h1styles = css`
    font-family: ${lato};
    text-transform: uppercase;
    font-size: 9rem;
    line-height: 9.4rem;
    color: #ffff;

    @media ${MediaQueries.tablet} {
        font-size: 4rem;
        line-height: 4.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3rem;
        line-height: 3.2rem;
    }
`;

export const h2styles = css`
    font-family: ${lato};
    font-size: 5.4rem;
    line-height: 5.5rem;
    color: #ffff;

    @media ${MediaQueries.tablet} {
        font-size: 3.5rem;
        line-height: 3.7rem;
    }
`;

export const h3styles = css`
    font-family: ${lato};
    font-size: 5.2rem;
    line-height: 6.3rem;
    font-weight: 300;
    color: #ffff;

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
    color: #ffff;

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
    color: #ffff;

    @media ${MediaQueries.tablet} {
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
`;

export const pBase = css`
    font-family: ${lato};
    font-size: 1.5rem;
    line-height: 1.7rem;
    font-weight: 300;
    color: #ffff;

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
    color: #ffff;

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
    color: #ffff;
`;

export const buttonType = css`
    font-family: ${lato};
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
    color: #ffff;
`;
