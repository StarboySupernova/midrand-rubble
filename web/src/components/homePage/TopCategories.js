import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useRef } from "react"; // Added hooks
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";
import { FaHardHat, FaEye, FaBullseye, FaSync } from "react-icons/fa"; // Added sync icon
import CategoryGrid from "../category/CategoryGrid";

const initialCards = [
  {
    id: "mission",
    title: "The Mission of Certainty",
    text: "Our mission is the absolute eradication of chaos from your job site. We deploy rapid-response tactical units and heavy-duty transport to instantly lift the burden of waste from our clients' shoulders. We provide a project-ready environment—same hour, same day, every day.",
    theme: "theme-slate",
    icon: <FaBullseye />
  },
  {
    id: "vision",
    title: "The Vision",
    text: "To be the undisputed sovereign of site clearing and logistical waste management in South Africa. We aim to set an uncompromising benchmark where our name is synonymous with unshakeable reliability and environmental precision.",
    theme: "theme-dark",
    icon: <FaEye />
  },
  {
    id: "capabilities",
    title: "Strategic Industrial Capabilities",
    text: "We provide the logistical muscle that keeps Gauteng’s development moving. From high-capacity NP300 fleet deployments to specialized heavy-duty manpower, our core services are engineered to handle the most demanding site clearing and debris challenges.",
    theme: "theme-yellow",
    icon: <FaHardHat />
  }
];

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug { current }
            _rawDescription
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          title
          slug { current }
          coverImage {
            alt
            asset { gatsbyImageData }
          }
          _rawDescription
        }
      }
      allSanityObjective { nodes { id, title, _rawDescription } }
      allSanityValue { nodes { id, title, _rawDescription } }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes || [];
  const DiginotiveValues = data.allSanityValue?.nodes || [];
  const categories = data.allSanityCategory?.nodes || [];

  const [stackedCards, setStackedCards] = useState(initialCards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Control auto-shuffle
  const autoPlayRef = useRef();

  const shuffle = () => {
    setStackedCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  // Auto-switch interval
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(shuffle, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const handleManualClick = (id, e) => {
    e.stopPropagation(); // Ensures only direct clicks on cards are counted
    setIsAutoPlaying(false); // Stop auto-play permanently after direct interaction
    
    setStackedCards((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === prev.length - 1) return prev;
      const newCards = [...prev];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      return newCards;
    });
  };

  return (
    <TopCategoriesStyles>
      <div className="card-stack-wrapper">
        <div className="card-stack-container">
          {stackedCards.map((card, index) => {
            const isTop = index === stackedCards.length - 1;
            const offset = stackedCards.length - 1 - index;
            
            return (
              <div
                key={card.id}
                className={`stacked-card ${card.theme} card-depth-${offset} ${isTop && isAutoPlaying ? 'pulse-hint' : ''}`}
                onClick={(e) => handleManualClick(card.id, e)}
                style={{
                  zIndex: index,
                  '--card-offset': offset,
                  opacity: isTop ? 1 : 0.8,
                }}
              >
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-icon">{card.icon}</div>
                </div>
                <div className="card-body">
                  <p>{card.text}</p>
                </div>
                
                {/* ACCESSIBILITY/UX HINT */}
                {isTop && (
                  <div className="interaction-hint">
                    <FaSync /> <span>{isAutoPlaying ? "Auto-Cycling" : "Interactive Mode"}</span>
                  </div>
                )}

                {!isTop && <div className="card-click-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>

      <CategoryGrid categories={categories} />

      <ActivityGrid activities={activities} />

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">Operational Values</SectionTitle>
        <ValueGrid DiginotiveValues={DiginotiveValues} />
      </div>

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">Strategic Objectives</SectionTitle>
        <ObjectiveGrid objectives={objectives} />
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;