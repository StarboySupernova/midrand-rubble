import styled from 'styled-components';

export const CategoryGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  /* TARGET BOTH VALUE AND OBJECTIVE CARDS */
  .value-card .bodyImage,
  .objective-card .bodyImage {
    width: 160px !important;    /* Mandated width */
    height: 160px !important;   /* Mandated height */
    float: left;                /* Magazine text wrap */
    margin: 0 2rem 1rem 0;      /* Margin: Right and Bottom */
    border-radius: 8px;
    overflow: hidden;
    shape-outside: inset(0%);   /* Ensures text flows around the square */
  }

  /* FORCE DISTORTION/FILL FOR BOTH & ADD GLOW */
  .value-card .bodyImage img,
  .objective-card .bodyImage img {
    object-fit: fill !important; 
    width: 100% !important;
    height: 100% !important;
    animation: glowPulse 3s infinite alternate; /* Dynamic Glow added here */
  }

  /* CLEARFIX to keep cards from breaking */
  .value-card .text-wrap-container::after,
  .objective-card .text-wrap-container::after {
    content: "";
    display: table;
    clear: both;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    
    .value-card .bodyImage,
    .objective-card .bodyImage {
      width: 120px !important;
      height: 120px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;

export const ValueGridStyles = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); /* Increased min-width to allow room for wrapping */

  /* TARGET ONLY IMAGES INSIDE THE VALUE GRID */
  .value-card .bodyImage {
    width: 160px !important;    /* Mandated width */
    height: 160px !important;   /* Mandated height */
    float: left;               /* This triggers the text wrap */
    margin: 0 2rem 1rem 0;     /* Space between image and wrapping text */
    border-radius: 8px;
    overflow: hidden;
    shape-outside: inset(0%);  /* Tells the text to follow the square boundary */
  }

  /* FORCE THE DISTORTION */
  .value-card .bodyImage img {
    object-fit: fill !important; 
    width: 100% !important;
    height: 100% !important;
  }

  /* CLEARFIX to prevent cards from collapsing */
  .value-card .text-wrap-container::after {
    content: "";
    display: table;
    clear: both;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    .value-card .bodyImage {
      width: 120px !important;
      height: 120px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;