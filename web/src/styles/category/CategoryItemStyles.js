import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  /* PREMIUM FROSTED GLASS CARDS */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 204, 0, 0.2); /* Edge highlight */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  
  /* Flex layout to push button to the bottom */
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 204, 0, 0.5); /* Glowing yellow border on hover */
  }

  .title {
    margin-bottom: 1.5rem;
    color: var(--white);
  }
  
  .text-wrap-container {
    margin-bottom: 2.5rem;
    color: var(--white-1);
    flex-grow: 1; /* Ensures this section takes up available space */
  }

  /* CLEARFIX: Prevents the card from breaking if text is shorter than the image */
  .text-wrap-container::after {
    content: "";
    display: table;
    clear: both;
  }

  /* TEXT WRAP & SQUARE MANDATE */
  .card-image-wrapper {
    width: 160px !important;    /* Mandated exact width */
    height: 160px !important;   /* Mandated exact height */
    float: left;                /* Pushes image left, text wraps around right */
    margin: 0 2rem 1rem 0;      /* Space between image and text */
    border-radius: 10px;
    overflow: hidden;
    shape-outside: inset(0%);   /* Tells the text to wrap tightly to the square boundary */
    border: 1px solid rgba(255, 204, 0, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  /* FORCE DISTORTION */
  .wrapped-img {
    width: 100% !important;
    height: 100% !important;
  }
  
  .wrapped-img img {
    object-fit: fill !important; /* Stretches/squeezes to fit the 160x160 box */
  }

  .button-container {
    margin-top: auto; 
    clear: both; /* Forces button below the floated image */
    align-self: flex-start; /* THIS STOPS THE GIANT STRETCHING */
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    
    .card-image-wrapper {
      width: 130px !important;
      height: 130px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;