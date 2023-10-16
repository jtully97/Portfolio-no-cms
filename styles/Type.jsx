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

export const glowMobile = keyframes`
    from {
        text-shadow: 0 0 3.5px #fff, 0 0 4.2px #fff, 0 0 5.25px #0008e6, 0 0 6.3px #0008e6, 0 0 70px #0008e6, 0 0 8.05px #0008e6, 0 0 9.1px #0008e6;
    }

    to {
        text-shadow: 0 0 4.2px #fff, 0 0 4.9px #00d9ff, 0 0 7.8px #00d9ff, 0 0 6.3px #00d9ff, 0 0 7.8px #00d9ff, 0 0 8.8px #00d9ff, 0 0 9.6px #00d9ff;
    }
`;

const lato = `Lato, sans-serif`;
const merriweather = `'Merriweather', sans`;
const pacifico = 'Pacifico, sans-serif';
export const neonderthaw = 'Neonderthaw, cursive';
export const limelight = 'Limelight, sans-serif';

export const posterType = css`
    font-family: ${limelight};
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: #000;

    @media ${MediaQueries.mobile} {
        font-size: 1rem;
        line-height: 1.2rem;
    }
`;

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
        font-size: 3.7rem;
        line-height: 3rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3.2rem;
        line-height: 2rem;
        font-weight: 100;
        -webkit-animation: ${glowMobile} 1s ease-in-out alternate;
        -moz-animation: ${glowMobile} 1s ease-in-out alternate;
        animation: ${glowMobile} 1s ease-in-out alternate;
        animation-fill-mode: forwards;
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

    @media ${MediaQueries.mobile} {
        font-size: 2.9rem;
        line-height: 3rem;
    }
`;

export const h3styles = css`
    font-family: ${lato};
    font-size: 5.2rem;
    line-height: 6.3rem;
    font-weight: 300;
    color: #ffff;

    @media ${MediaQueries.tablet} {
        font-size: 3.7rem;
        line-height: 3.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3.2rem;
        line-height: 3.3rem;
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
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-weight: 300;
    color: #ffff;
`;

export const pXSmall = css`
    font-family: ${lato};
    font-size: 1rem;
    line-height: 1.2rem;
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
