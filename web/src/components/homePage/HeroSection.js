import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <div className="badge">✅ SAME-DAY SERVICE AVAILABLE</div>
            <h1 className="hero__heading">
              Fast & Affordable Rubble Removal in Midrand
            </h1>
            <ParagraphText className="hero__text">
              We Load. We Clear. You Relax. Serving Midrand, Centurion, Sandton, and Fourways with reliable site clearing and construction debris transport.
            </ParagraphText>
            
            <div className="hero__action-buttons">
              <Button tag="a" href="https://wa.me/27786112695" target="_blank" className="btn-whatsapp">
                <FaWhatsapp style={{ marginRight: '8px' }} /> WhatsApp Us
              </Button>
              <Button tag="a" href="tel:+27810786434" variant="outline" className="btn-call">
                <FaPhoneAlt style={{ marginRight: '8px' }} /> Call Sbusiso
              </Button>
            </div>
          </div>

          <div className="right">
            {/* NETLIFY QUICK QUOTE FORM */}
            <div className="quote-form-container">
              <h3>Get a Quick Quote</h3>
              <form name="quick-quote" method="POST" data-netlify="true" action="/">
                <input type="hidden" name="form-name" value="quick-quote" />
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                <select name="service" required>
                  <option value="" disabled selected>Select Service...</option>
                  <option value="Rubble Removal">Rubble Removal</option>
                  <option value="Site Clearing">Site Clearing</option>
                  <option value="Garden Waste">Garden Waste Removal</option>
                  <option value="Construction Debris">Construction Debris</option>
                  <option value="NP300 Transport">Small & Medium Transport</option>
                </select>
                <textarea name="message" placeholder="Briefly describe what needs clearing..." rows="3"></textarea>
                <button type="submit" className="submit-btn">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;