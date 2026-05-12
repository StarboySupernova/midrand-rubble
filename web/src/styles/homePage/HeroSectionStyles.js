import styled from "styled-components";

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
    font-family: "Poppins", sans-serif;
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

/* 3D SVG CAROUSEL STYLES */
  .svg-carousel-container {
    width: 100%;
    max-width: 355px; /* INCREASED BY ~10% */
    margin: 35px 0 40px 0; /* Slightly increased margin to accommodate larger scale */
    position: relative;
    animation: floatCard 6s ease-in-out infinite;
  }

  @keyframes floatCard {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .carousel-mask {
    width: 100%;
    height: 100%;
    border-radius: 26px; /* Matched perfectly to SVG curve */
    overflow: hidden;
    position: relative;
    background: var(--black-1);
  }

  /* THE SHUFFLE ANIMATION ENGINE */
  .carousel-image {
    position: absolute;
    inset: 0;
    opacity: 0;
    /* Card slides out to the right, scales down, and rotates slightly when inactive */
    transform: translateX(60px) scale(0.8) rotate(-4deg);
    transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1); /* A dynamic, bouncy curve */
    z-index: 1;
  }

  .carousel-image.active {
    opacity: 1;
    /* Card snaps perfectly into place when active */
    transform: translateX(0px) scale(1) rotate(0deg);
    z-index: 2;
  }

  /* Ensures the distorted images don't overflow */
  .carousel-image .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel-image img {
    object-fit: fill !important; /* Forces aspect ratio distortion */
  }

  .glass-reflection-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%);
    border: 1.5px solid rgba(255, 204, 0, 0.5); /* Stronger yellow border for contrast */
    border-radius: 26px;
    pointer-events: none;
    z-index: 3;
    box-shadow: inset 0 0 25px rgba(0,0,0,0.6);
  }

  .hero__action-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .btn-whatsapp {
    background: #25d366 !important; /* Official WhatsApp Green */
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
    box-shadow:
      0 30px 60px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);

    h3 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: var(--white);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 14px 15px;
      margin-bottom: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.4) !important; /* Dark Glass */
      color: var(--white);
      font-size: 1.4rem;
      font-family: "Inter", sans-serif;
      transition: all 0.3s ease;
      appearance: none; /* Removes the default browser clunkiness */
      -webkit-appearance: none;
    }

    .select-wrapper {
      position: relative;
      width: 100%;
    }

    /* CUSTOM SELECT STYLING - MATCHING REFERENCE */
    .custom-select-container {
      position: relative;
      margin-bottom: 15px;
      width: 100%;
      cursor: pointer;
      font-size: 1.4rem;
    }

    .select-trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 15px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: var(--white);
      transition: 0.3s;
    }

    .select-trigger.active,
    .select-trigger:hover {
      border-color: var(--primary);
      box-shadow: 0 0 15px rgba(255, 204, 0, 0.2);
    }

    .arrow {
      /* We must use !important to kill the global 100% SVG rule */
      width: 1.8rem !important;
      height: 1.8rem !important;
      transition: transform 0.3s ease;
      color: var(--primary);
      flex-shrink: 0; /* Prevents the arrow from squashing if text is long */
    }

    .arrow.open {
      transform: rotate(180deg);
    }

    /* THE FLOATING MENU */
    .dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      width: 100%;
      background: rgba(15, 15, 18, 0.95); /* Deep dark background */
      backdrop-filter: blur(20px);
      border: 1px solid var(--primary); /* That specific yellow glow border */
      border-radius: 12px;
      z-index: 100;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
      animation: fadeUp 0.3s ease-out forwards;
    }

    .dropdown-item {
      padding: 12px 20px;
      color: var(--white-1);
      transition: 0.2s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .dropdown-item:last-child {
      border-bottom: none;
    }

    .dropdown-item:hover {
      background: var(--primary);
      color: var(--black);
      font-weight: 600;
    }

    /* OTHER INPUTS */
    input,
    textarea {
      width: 100%;
      padding: 14px 15px;
      margin-bottom: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.4);
      color: var(--white);
      font-size: 1.4rem;
      outline: none;
    }

    input:focus,
    textarea:focus {
      border-color: var(--primary);
      background: rgba(0, 0, 0, 0.6);
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

    /* SUCCESS STATE STYLING */
    .success-message {
      text-align: center;
      padding: 20px 0;

      .success-icon {
        font-size: 5rem !important;
        color: #25d366;
        margin-bottom: 20px;
        width: 50px !important;
        height: 50px !important;
      }

      h3 {
        color: var(--white);
        margin-bottom: 10px;
      }
      p {
        font-size: 1.4rem;
        color: var(--white-1);
        margin-bottom: 30px;
      }

      .reset-btn {
        background: transparent;
        color: var(--primary);
        border: 1px solid var(--primary);
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      grid-template-columns: 1fr; 
      padding-top: 100px;
    }
    .hero__heading {
      font-size: 3.5rem;
    }
  }
`;
