import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .container {
    height: 100%;
    z-index: 2;
  }

  .hero__wrapper {
    width: 100%;
    height: 100%;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      /* Deep shadow fading out */
      background: linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(10,5,0,0) 100%); 
      z-index: -1;
    }

    .left {
      width: 50%;
      padding: 100px 0 50px 0;
      opacity: 0;
      animation: fadeUp 1s ease-out 0.2s forwards;

      .hero__heading {
        max-width: 550px;
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin: 0.5rem 0;
        line-height: 1.2;
        background: linear-gradient(to right, #ffffff, var(--primary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .hero__text {
        max-width: 450px;
        font-size: 1.6rem;
        margin-top: 1.5rem;
        color: var(--white-1);
      }

      .hero__button {
        margin-top: 2.5rem;
      }
    }

    .right {
      position: absolute;
      right: 2%; 
      top: 15%; 
      width: 45%;
      height: 70%;
      z-index: 1;
      opacity: 0;
      animation: fadeUp 1.2s ease-out 0.4s forwards;

      .hero__image {
        width: 100%;
        height: 100%;
        border-radius: 24px; 
        border: 2px solid rgba(243, 112, 33, 0.4); 
        animation: glowPulse 3.5s infinite alternate; /* Dynamic Glow */
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 100px;
      padding-bottom: 80px;
      
      &::after { width: 100%; background: rgba(5,5,5,0.8); }

      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 3rem;
        opacity: 0;
        animation: fadeUp 0.8s ease-out 0.2s forwards;
        
        .hero__image {
          height: 300px;
          width: 90%; 
          margin: 0 auto;
          border-radius: 20px;
        }
      }

      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        opacity: 0;
        animation: fadeUp 0.8s ease-out 0.4s forwards;
        
        .hero__heading {
          max-width: 100%;
          font-size: 3.2rem;
        }
        .hero__text { max-width: 100%; }
      }
    }
  }
`;