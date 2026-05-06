import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Precision Logistics & Integrated Infrastructure Solutions
            </h1>
            <ParagraphText className="hero__text">
              Moorosi Holdings & Logistics is an industry-leading Level 1 B-BBEE partner. We provide the heavy-lifting power and technical precision required to move South Africa’s largest assets and maintain its most critical environments.
            </ParagraphText>
            <Button to="/activities" tag={Link} className="hero__button">
              Command Your Project
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/demtMalnutrition.jpg" 
              alt="Moorosi Holdings Heavy Plant and Logistics fleet"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
