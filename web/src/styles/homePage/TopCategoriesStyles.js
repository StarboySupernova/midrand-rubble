import styled from 'styled-components';

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  overflow: hidden;

  .card-stack-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6rem 0 10rem 0;
    padding-right: 120px; /* Space for the fan on desktop */
  }

  .card-stack-container {
    position: relative;
    width: 100%;
    max-width: 700px; /* Slightly narrower to show more background */
    height: 350px;
  }

  .stacked-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    padding: 40px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    
    /* DESKTOP FAN-OUT LOGIC */
    /* Spreads cards to the right and adds a slight 3D perspective rotation */
    transform: translate(calc(var(--card-offset) * 55px), calc(var(--card-offset) * 15px)) 
               rotate(calc(var(--card-offset) * -1.5deg))
               scale(calc(1 - var(--card-offset) * 0.04));
  }

  /* Make background cards feel deeper and slightly darker */
  .card-depth-1 { filter: brightness(0.8) blur(0.5px); }
  .card-depth-2 { filter: brightness(0.6) blur(1px); }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .card-header h3 {
    font-size: 2.2rem;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
  }

  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    flex-shrink: 0;
  }

  .card-body p {
    font-size: 1.5rem;
    line-height: 1.5;
    opacity: 0.9;
  }

  .card-click-overlay {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  /* --- THEMES --- */
  .theme-yellow {
    background: linear-gradient(135deg, #FFCC00 0%, #E6A800 100%);
    color: #000;
    .card-icon { background: #000; color: #FFCC00; }
  }

  .theme-dark {
    background: rgba(15, 15, 18, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid var(--primary);
    color: #fff;
    .card-icon { background: var(--primary); color: #000; }
  }

  .theme-slate {
    background: rgba(45, 45, 55, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    .card-icon { background: rgba(255,255,255,0.1); color: #fff; }
  }

  /* --- RESPONSIVE: VERTICAL FAN-OUT --- */
  @media only screen and (max-width: 900px) {
    .card-stack-wrapper {
      padding-right: 0;
      padding-bottom: 80px; /* Space for the vertical fan */
    }
    .card-stack-container {
      max-width: 90%;
      height: 400px;
    }
    .stacked-card {
        /* Switch to Vertical Stack */
      transform: translate(0, calc(var(--card-offset) * 45px)) 
                 scale(calc(1 - var(--card-offset) * 0.05));
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
  }

  @media only screen and (max-width: 600px) {
    .card-stack-container {
      height: 500px;
    }
    .card-header h3 { font-size: 1.8rem; }
    .card-body p { font-size: 1.3rem; }
  }
`;