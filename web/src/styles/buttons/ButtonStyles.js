import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  /* Orange Gradients */
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? 'linear-gradient(135deg, var(--secondary), var(--primary))'
      : variant === buttonTypes.secondary
      ? 'var(--white-1)'
      : 'transparent'};
      
  border: ${({ variant }) =>
    variant === buttonTypes.outline ? '2px solid var(--primary)' : 'none'};
    
  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? 'var(--black-1)' : 'var(--white)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ variant }) =>
      variant === buttonTypes.outline 
      ? '0 0 15px rgba(243, 112, 33, 0.4) inset, 0 0 15px rgba(243, 112, 33, 0.4)' 
      : '0 8px 25px rgba(243, 112, 33, 0.6)'}; /* High impact orange shadow */
  }

  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;