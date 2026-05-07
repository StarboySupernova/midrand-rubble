import React, { useState } from "react";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";
import { FaWhatsapp, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service...");

  const services = [
    "Rubble Removal",
    "Site Clearing",
    "Garden Waste Removal",
    "Construction Debris",
    "Small & Medium Transport",
  ];

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <div className="badge">✅ SAME-DAY SERVICE AVAILABLE</div>
            <h1 className="hero__heading">Fast & Affordable Rubble Removal in Midrand</h1>
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
            <div className="quote-form-container">
              <h3>Get a Quick Quote</h3>
              <form name="quick-quote" method="POST" data-netlify="true" action="/">
                <input type="hidden" name="form-name" value="quick-quote" />
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                
                {/* THE CUSTOM DROPDOWN COMPONENT */}
                <div className="custom-select-container">
                  <div className={`select-trigger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectedService}</span>
                    <FaChevronDown className={`arrow ${isOpen ? 'open' : ''}`} />
                  </div>
                  
                  {isOpen && (
                    <div className="dropdown-menu">
                      {services.map((service) => (
                        <div 
                          key={service} 
                          className="dropdown-item" 
                          onClick={() => {
                            setSelectedService(service);
                            setIsOpen(false);
                          }}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Hidden input to pass data to Netlify Form */}
                  <input type="hidden" name="service" value={selectedService} />
                </div>

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