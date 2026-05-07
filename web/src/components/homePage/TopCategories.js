import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";
import { FaHardHat, FaEye, FaBullseye } from "react-icons/fa";

// The data for our dynamic cards
const initialCards =[
  {
    id: "mission",
    title: "The Mission of Certainty",
    text: "Our mission is the absolute eradication of chaos from your job site. We understand that rubble is more than just debris, for it is a safety hazard and a bottleneck to your progress. We deploy rapid-response tactical units and heavy-duty transport to instantly lift the burden of waste from our clients' shoulders. We provide a seamless transition from a cluttered environment to a project-ready environment—same hour, same day, every day.",
    theme: "theme-slate",
    icon: <FaBullseye />
  },
  {
    id: "vision",
    title: "The Vision",
    text: "To be the undisputed sovereign of site clearing and logistical waste management in South Africa. We aim to set an uncompromising benchmark where the name \"Midrand Rubble Removal\" is synonymous with unshakeable reliability, environmental precision, and the total elimination of project-site friction. We see a future where every construction site in Gauteng starts and ends as a pristine blank slate.",
    theme: "theme-dark",
    icon: <FaEye />
  },
  {
    id: "capabilities",
    title: "Strategic Industrial Capabilities",
    text: "We provide the logistical muscle that keeps Gauteng’s development moving. From high-capacity NP300 fleet deployments to specialized heavy-duty manpower, our core services are engineered to handle the most demanding site clearing and debris challenges. We don’t just haul waste; we reclaim your operational space, ensuring that your residential or commercial project remains a clean, safe, and efficient environment.",
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
      allSanityObjective {
        nodes { id, title, _rawDescription }
      }
      allSanityValue {
        nodes { id, title, _rawDescription }
      }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes ||[];
  const DiginotiveValues = data.allSanityValue?.nodes ||[];

  // State to manage the card stack order
  const [stackedCards, setStackedCards] = useState(initialCards);

  const handleCardClick = (clickedId) => {
    setStackedCards((prev) => {
      const index = prev.findIndex((c) => c.id === clickedId);
      // If it's already the last item (on top), do nothing
      if (index === prev.length - 1) return prev; 
      
      // Pull the clicked card out and push it to the end of the array
      const newCards = [...prev];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      return newCards;
    });
  };

  return (
    <TopCategoriesStyles>
      {/* THE DYNAMIC STACKED CARDS */}
      <div className="card-stack-wrapper">
        <div className="card-stack-container">
          {stackedCards.map((card, index) => {
            const isTop = index === stackedCards.length - 1;
            const offset = stackedCards.length - 1 - index;

            return (
              <div
                key={card.id}
                className={`stacked-card ${card.theme} card-depth-${offset}`}
                onClick={() => handleCardClick(card.id)}
                style={{
                  zIndex: index,
                  /* 
           DESKTOP: Horizontal Spread (offset * 60px)
           MOBILE: Vertical Spread (handled in CSS via Media Queries)
           We use a CSS variable for the offset so we can change 
           the fan direction easily in the stylesheet.
        */
                  "--card-offset": offset,
                  opacity: isTop ? 1 : 0.9,
                  cursor: isTop ? "default" : "pointer",
                }}
              >
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-icon">{card.icon}</div>
                </div>
                <div className="card-body">
                  <p>{card.text}</p>
                </div>
                {!isTop && <div className="card-click-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>

      <ActivityGrid activities={activities} />

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">Operational Values</SectionTitle>
        <ParagraphText
          className="centre__text"
          style={{ marginBottom: "2rem" }}
        >
          The core principles that govern our rapid-response units.
        </ParagraphText>
        <ValueGrid DiginotiveValues={DiginotiveValues} />
      </div>

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">
          Strategic Objectives
        </SectionTitle>
        <ParagraphText
          className="centre__text"
          style={{ marginBottom: "2rem" }}
        >
          How we measure our dominance in the site clearing industry.
        </ParagraphText>
        <ObjectiveGrid objectives={objectives} />
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;