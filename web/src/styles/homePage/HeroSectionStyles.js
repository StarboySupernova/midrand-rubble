import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .hero__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    padding: 120px 0 60px 0;
  }

  .badge {
    display: inline-block;
    background: var(--primary);
    color: var(--black);
    padding: 5px 12px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .hero__heading {
    font-size: 4.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    color: var(--white);
  }

  .hero__text {
    font-size: 1.6rem;
    color: var(--white-1);
    margin-bottom: 30px;
  }

  .hero__action-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .btn-whatsapp {
    background: #25D366 !important; /* Official WhatsApp Green */
    color: white !important;
    display: flex;
    align-items: center;
  }

  .btn-call {
    display: flex;
    align-items: center;
    border-color: var(--primary) !important;
    color: var(--primary) !important;
  }

  /* QUOTE FORM STYLING */
 /* HIGH-END GLASSMORPHISM QUOTE FORM */
  .quote-form-container {
    background: rgba(20, 20, 22, 0.4); /* Semi-transparent dark */
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(255, 204, 0, 0.3); /* Subtle top highlight */
    box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);

    h3 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: var(--white);
      text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }

    input, textarea, select {
      width: 100%;
      padding: 14px 15px;
      margin-bottom: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.4) !important; /* Dark Glass */
      color: var(--white);
      font-size: 1.4rem;
      font-family: 'Inter', sans-serif;
      transition: all 0.3s ease;
      appearance: none; /* Removes the default browser clunkiness */
      -webkit-appearance: none;
    }

    .select-wrapper {
      position: relative;
      width: 100%;
    }

    /* THE DROPDOWN LIST (The part you hated) */
    select option {
      background-color: #121212; /* Matches your reference image's dark menu */
      color: white;
      padding: 10px;
    }

    /* THE CUSTOM ARROW (Sleek minimalist look) */
    .custom-arrow {
      position: absolute;
      top: 18px;
      right: 15px;
      width: 10px;
      height: 10px;
      border-right: 2px solid var(--primary);
      border-bottom: 2px solid var(--primary);
      transform: rotate(45deg);
      pointer-events: none;
      transition: 0.3s ease;
    }

    .select-wrapper:focus-within .custom-arrow {
      transform: rotate(-135deg); /* Flips when you click */
      top: 22px;
    }

    input:focus, select:focus, textarea:focus {
      border-color: var(--primary);
      background: rgba(0, 0, 0, 0.6) !important;
      box-shadow: 0 0 15px rgba(255, 204, 0, 0.2);
      outline: none;
    }

    .submit-btn {
      width: 100%;
      background: var(--primary);
      color: var(--black);
      padding: 16px;
      border: none;
      border-radius: 8px;
      font-size: 1.6rem;
      font-weight: 800;
      cursor: pointer;
      transition: 0.3s;
      text-transform: uppercase;
      letter-spacing: 1px;
      
      &:hover {
        background: var(--white);
        box-shadow: 0 10px 20px rgba(255, 204, 0, 0.3);
        transform: translateY(-2px);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      grid-template-columns: 1fr;
      padding-top: 100px;
    }
    .hero__heading { font-size: 3.5rem; }
  }
`;