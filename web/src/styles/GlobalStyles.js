import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Construction Theme: High-Vis Yellow & Slate */
    --primary: #FFCC00; /* Caterpillar Yellow */
    --secondary: #E6A800; 
    --darkBlue: #111111; 
    --darkPurple: #1C1C1E; 
    --black-1: #0A0A0B; 
    --black-2: rgba(28, 28, 30, 0.85); 
    --white-1: #F5F5F7;
    --gray: #8E8E93;
    --grey: var(--gray);
    --white: #ffffff;
    --black: #000000;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter', sans-serif;
    background: var(--black-1); /* Solid dark, no gradients needed for this theme */
    color: var(--white);
    overflow-x: hidden;
  }

  /* THE GHOST WATERMARK */
  body::before {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;  /* Giant scale */
    height: 80vw;
    background-image: url("/midrandrubble.jpeg"); 
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    opacity: 0.15; 
    
    pointer-events: none; /* User can click through it */
    z-index: -1; /* Sits behind everything */
    filter: grayscale(100%) brightness(200%); /* Makes it look etched */
  }

  @media only screen and (max-width: 768px) {
    body::before {
      width: 150vw; /* Even larger on mobile so only part of it shows */
      opacity: 0.04;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  img, svg {
    height: 100%;
    width: 100%;
  }

  li, ul {
    list-style: none;
  }

  /* Professional Entrance Animations */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Dynamic Orange Glow */
  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 8px rgba(243, 112, 33, 0.15), inset 0 0 0px rgba(243, 112, 33, 0);
    }
    50% {
      box-shadow: 0 0 25px rgba(243, 112, 33, 0.5), inset 0 0 10px rgba(243, 112, 33, 0.2);
    }
    100% {
      box-shadow: 0 0 8px rgba(243, 112, 33, 0.15), inset 0 0 0px rgba(243, 112, 33, 0);
    }
  }

  @keyframes borderGlow {
    0% { border-color: rgba(243, 112, 33, 0.2); }
    50% { border-color: rgba(243, 112, 33, 0.6); }
    100% { border-color: rgba(243, 112, 33, 0.2); }
  }
`;

export default GlobalStyles;