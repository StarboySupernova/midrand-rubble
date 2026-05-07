import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--black-1);

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
  .quote-form-container {
    background: var(--darkPurple);
    padding: 40px;
    border-radius: 12px;
    border-top: 5px solid var(--primary);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);

    h3 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: var(--white);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 15px;
      border: 1px solid #333;
      border-radius: 6px;
      background: var(--black-1);
      color: var(--white);
      font-size: 1.4rem;
      font-family: 'Inter', sans-serif;
    }

    .submit-btn {
      width: 100%;
      background: var(--primary);
      color: var(--black);
      padding: 15px;
      border: none;
      border-radius: 6px;
      font-size: 1.6rem;
      font-weight: 700;
      cursor: pointer;
      transition: 0.3s;
      
      &:hover {
        background: var(--secondary);
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