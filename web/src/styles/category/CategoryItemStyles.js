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