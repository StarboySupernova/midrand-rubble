import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-block;
  background: var(--black-2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(243, 112, 33, 0.2);
  transition: transform 0.4s ease;
  
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards, borderGlow 5s infinite alternate;

  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(243, 112, 33, 0.4);
    /* Dynamic Image Glow */
    animation: glowPulse 3s infinite alternate;
    overflow: hidden;
    
    [data-main-image] {
      transition: 0.5s ease-in-out transform;
    }
  }

  .title {
    margin-bottom: 0.5rem;
    color: var(--white);
  }

  .publishedAt {
    margin-bottom: 0.3rem;
    color: var(--gray);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(243, 112, 33, 0.3);
    
    .img [data-main-image] {
      transform: scale(1.08);
    }
  }

  .categoriesText a {
    color: var(--primary);
    &:hover {
      text-decoration: underline;
    }
  }
`;