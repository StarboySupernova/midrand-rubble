import styled from 'styled-components';

export const PremiumCardStyles = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  /* Provide space for the offset shadow layers to peek out */
  margin-bottom: 30px; 
  margin-right: 15px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-8px);
    
    /* Expand the layers slightly on hover for a 3D reveal effect */
    &::before { transform: translate(18px, 18px); }
    &::after { transform: translate(8px, 32px); }
  }

  /* LAYER 1: The Bright Colored Drop Layer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transform: translate(12px, 12px);
    background: var(--layer-color);
    border-radius: 36px;
    z-index: -1;
    transition: transform 0.4s ease;
  }

  /* LAYER 2: The Dark Gray Drop Layer (from the SVG) */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translate(5px, 25px);
    background: #595959; /* Slate Gray */
    border-radius: 36px;
    z-index: -2;
    transition: transform 0.4s ease;
  }

  .main-card {
    background: var(--main-gradient);
    border-radius: 36px;
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* The "UPDATED" style Top Left Tag */
  /* The Top Left Tag */
  .card-tag {
    font-size: 0.9rem; /* Increased size slightly */
    font-weight: 700;
    letter-spacing: 2.5px; /* Wider tracking for a more premium look */
    text-transform: uppercase;
    color: #ffffff; /* Full white */
    opacity: 0.9;
    margin-bottom: 25px;
    display: block;
  }

  /* Top Right Dark Circle Icon */
  .icon-badge {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    background: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--layer-color); /* Icon matches the layer color */
    font-size: 1.5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .title {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.2;
    color: #ffffff;
    margin-bottom: 1.5rem;
    max-width: 85%; /* Keeps title away from the icon badge */
  }

  .text-wrap-container {
    /* Use solid white or a very high-contrast slate-white */
    color: #ffffff; 
    /* Increased from 1.1rem to 1.5rem for professional readability */
    font-size: 1.5rem; 
    /* Increased line-height for better eye-tracking */
    line-height: 1.7;
    /* Slightly heavier weight helps text pop against vibrant gradients */
    font-weight: 450; 
    
    p { 
      margin-bottom: 1.5rem; 
    }

    /* Subtle text shadow to separate text from complex mesh gradients */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  /* THE DYNAMIC COLOR PALETTES */
  &.theme-ruby {
    --main-gradient: linear-gradient(145deg, #9b2843 0%, #d95a70 100%);
    --layer-color: #ff6b8e;
  }
  &.theme-ocean {
    --main-gradient: linear-gradient(145deg, #1A3A73 0%, #3873C4 100%);
    --layer-color: #4C9AFF;
  }
  &.theme-amber {
    --main-gradient: linear-gradient(145deg, #994D1C 0%, #E68A2E 100%);
    --layer-color: #FFB84D;
  }
  &.theme-emerald {
    --main-gradient: linear-gradient(145deg, #1C664A 0%, #35A87A 100%);
    --layer-color: #4CFAAD;
  }
  &.theme-amethyst {
    --main-gradient: linear-gradient(145deg, #4A2B7A 0%, #8253C4 100%);
    --layer-color: #B588FF;
  }

  @media only screen and (max-width: 768px) {
    .main-card { padding: 30px; }
    .title { font-size: 1.8rem; }
    .icon-badge { top: 20px; right: 20px; width: 35px; height: 35px; font-size: 1.2rem; }
  }
`;