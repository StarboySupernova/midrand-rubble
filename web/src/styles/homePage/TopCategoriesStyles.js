import styled from 'styled-components';

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  
  .centre__text {
    text-align: center;
  }
  
  /* --- DYNAMIC STACKED CARDS UI --- */
  .card-stack-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 8rem 0;
  }

  .card-stack-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 320px; /* Base height for Desktop */
  }

  .stacked-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    padding: 40px;
    /* This creates the smooth shuffle animation */
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .card-header h3 {
    font-size: 2.5rem;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.5px;
  }

  /* Badge Icon resembling the iOS reference */
  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    font-size: 2.2rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  .card-body p {
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;
  }

  .card-click-overlay {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: transparent;
  }

  /* --- CARD THEMES (Matching Midrand Rubble) --- */
  
  .theme-yellow {
    background: linear-gradient(135deg, var(--primary) 0%, #D4A000 100%);
    color: var(--black);
    .card-icon {
      background: var(--black);
      color: var(--primary);
    }
  }

  .theme-dark {
    background: rgba(20, 20, 22, 0.95);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--primary);
    color: var(--white);
    .card-icon {
      background: var(--primary);
      color: var(--black);
    }
  }

  .theme-slate {
    background: rgba(40, 40, 45, 0.95);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--white-1);
    .card-icon {
      background: rgba(255,255,255,0.1);
      color: var(--white);
      border: 1px solid rgba(255,255,255,0.2);
    }
  }

  /* --- RESPONSIVE HEIGHT TRADEOFFS --- */
  /* Because absolute positioning removes items from the flow, we must manually scale the container height on smaller screens where text wraps and takes up more vertical space. */

  @media only screen and (max-width: 900px) {
    .card-stack-container {
      height: 380px;
    }
  }

  @media only screen and (max-width: 768px) {
    .card-stack-container {
      height: 480px; 
      max-width: 90%;
    }
    .stacked-card {
      padding: 30px 20px;
    }
    .card-header h3 {
      font-size: 2rem;
    }
    .card-body p {
      font-size: 1.4rem;
    }
    .card-icon {
      width: 45px;
      height: 45px;
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .card-stack-container {
      height: 550px; 
    }
  }
  
  @media only screen and (max-width: 380px) {
    .card-stack-container {
      height: 600px; 
    }
  }
`;