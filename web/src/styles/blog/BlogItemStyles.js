import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  /* PREMIUM FROSTED GLASS BASE */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 204, 0, 0.2); /* Soft Yellow Edge Highlight */
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  z-index: 1;

  /* DECORATIVE AMBIENT BLOB 1 (Yellow Glow) */
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -20%;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    transition: transform 0.6s ease;
  }

  /* DECORATIVE AMBIENT BLOB 2 (White Depth Glow) */
  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }

  /* HOVER EFFECTS */
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 204, 0, 0.15);
    border-color: rgba(255, 204, 0, 0.4);

    /* Move the ambient blob on hover for a dynamic 3D feel */
    &::before {
      transform: scale(1.5) translate(-10%, 10%);
      background: radial-gradient(circle, rgba(255, 204, 0, 0.25) 0%, transparent 70%);
    }

    .img [data-main-image] {
      transform: scale(1.08);
    }
    
    /* Highlight the Pill Button */
    .action-pill {
      background: var(--primary);
      color: var(--black);
      border-color: var(--primary);
      box-shadow: 0 8px 20px rgba(255, 204, 0, 0.3);
      
      .icon-circle {
        background: var(--black);
        color: var(--primary);
      }
    }
  }

  /* IMAGE CONTAINER */
  .img {
    height: 220px;
    margin-bottom: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;[data-main-image] {
      transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  /* TYPOGRAPHY */
  .title-link {
    text-decoration: none;
  }

  .title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: var(--white);
    line-height: 1.3;
    font-weight: 800;
    /* Truncates long titles to keep cards uniform */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* METADATA SPACING */
  .meta-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 3rem;
    flex-grow: 1; /* Pushes the button to the bottom */
  }

  .publishedAt, .categoriesText {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0;
    
    svg {
      color: var(--primary);
      width: 16px;
      height: 16px;
    }
    
    a {
      color: rgba(255, 255, 255, 0.8);
      &:hover { color: var(--primary); }
    }
  }

  /* SVG-INSPIRED PILL BUTTON */
  .action-pill-link {
    text-decoration: none;
    margin-top: auto;
  }

  .action-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 6px 20px 6px 6px; /* Off-center padding for the icon */
    border-radius: 50px;
    width: fit-content;
    transition: all 0.4s ease;
    color: var(--white);
    font-weight: 700;
    font-size: 1.3rem;

    .icon-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: rgba(255, 204, 0, 0.15);
      color: var(--primary);
      border-radius: 50%;
      transition: all 0.4s ease;
      
      svg { width: 14px; height: 14px; }
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    .title { font-size: 1.8rem; }
    .img { height: 180px; }
  }
`;