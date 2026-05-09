import React, { useState } from "react";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";
import { FaWhatsapp, FaPhoneAlt, FaChevronDown, FaCheckCircle } from "react-icons/fa";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service...");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track success

  const services = [
    "Rubble Removal",
    "Site Clearing",
    "Garden Waste Removal",
    "Construction Debris",
    "Small & Medium Transport",
  ];

  // Helper function to encode form data for Netlify
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    
    // We collect the data from the form fields
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quick-quote", ...data })
    })
      .then(() => setIsSubmitted(true)) // Show success UI
      .catch(error => alert(error));
  };

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
              {/* PSYCHOLOGICAL TRIGGER: Show success message if form is sent */}
              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h3>Request Sent!</h3>
                  <p>Sibusiso or Tshiamo will contact you shortly with your quote.</p>
                  <button onClick={() => setIsSubmitted(false)} className="reset-btn">Send another request</button>
                </div>
              ) : (
                <>
                  <h3>Get a Quick Quote</h3>
                  <form 
                    name="quick-quote" 
                    method="POST" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* Hidden fields required by Netlify */}
                    <input type="hidden" name="form-name" value="quick-quote" />
                    <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                    
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
                      <input type="hidden" name="service" value={selectedService} />
                    </div>

                    <textarea name="message" placeholder="Briefly describe what needs clearing..." rows="3"></textarea>
                    <button type="submit" className="submit-btn">Send Request</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;