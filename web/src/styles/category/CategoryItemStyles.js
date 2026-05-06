import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  background: var(--black-2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(243, 112, 33, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  /* Entrance Animation & Continuous Subtle Glow */
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards, borderGlow 4s infinite alternate;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(243, 112, 33, 0.4);
    background: rgba(30, 30, 30, 0.8);
  }

  .title {
    margin-bottom: 1.5rem;
    color: var(--white);
  }
  
  .text {
    margin-bottom: 2.5rem;
    color: var(--white-1);
  }

  .custom-image {
    max-width: 100%;
    max-height: 250px;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(243, 112, 33, 0.3);
    animation: glowPulse 3s infinite alternate;
  }
`;