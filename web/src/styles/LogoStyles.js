import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px; 
  height: 55px;
  
  /* The Squircle Shape */
  border-radius: 32%; 
  overflow: hidden;
  
  /* Visual Identity */
  background: #000;
  border: 1.5px solid rgba(243, 112, 33, 0.4);
  box-shadow: 0 0 15px rgba(243, 112, 33, 0.2);
  transition: all 0.3s ease;

  /* Force the Gatsby wrapper to be exactly the parent size */
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }

  /* Force the internal image to distort and fill */
  img {
    object-fit: fill !important;
  }

  &:hover {
    transform: scale(1.08) rotate(2deg);
    border-color: var(--primary);
    box-shadow: 0 0 25px rgba(243, 112, 33, 0.5);
  }
`;