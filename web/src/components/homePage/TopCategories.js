import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
// import CategoryGrid from '../category/CategoryGrid';
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
      allSanityObjective {
        nodes {
          id
          title
          _rawDescription
        }
      }
      allSanityValue {
        nodes {
          id
          title
          _rawDescription
        }
      }
    }
  `);
  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes || [];
  const DiginotiveValues = data.allSanityValue?.nodes || [];

  return (
    <TopCategoriesStyles>
      {/* SECTION 1: CAPABILITIES */}
      <SectionTitle className="centre__text">
        Strategic Industrial Capabilities
      </SectionTitle>
      <ParagraphText
        className="centre__text"
        style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}
      >
        We provide the logistical muscle that keeps Gauteng’s development
        moving. From high-capacity NP300 fleet deployments to specialized
        heavy-duty manpower, our core services are engineered to handle the most
        demanding site clearing and debris challenges. We don’t just haul waste;
        we reclaim your operational space, ensuring that your residential or
        commercial project remains a clean, safe, and efficient environment.
      </ParagraphText>

      <ActivityGrid activities={activities} />

      {/* SECTION 2: VISION */}
      <SectionTitle className="centre__text">The Vision</SectionTitle>
      <ParagraphText
        className="hero__text centre__text"
        style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}
      >
        To be the undisputed sovereign of site clearing and logistical waste
        management in South Africa. We aim to set an uncompromising benchmark
        where the name "Midrand Rubble Removal" is synonymous with unshakeable
        reliability, environmental precision, and the total elimination of
        project-site friction. We see a future where every construction site in
        Gauteng starts and ends as a pristine blank slate.
      </ParagraphText>

      {/* SECTION 3: MISSION */}
      <SectionTitle className="centre__text">
        The Mission of Certainty
      </SectionTitle>
      <ParagraphText
        className="hero__text centre__text"
        style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}
      >
        Our mission is the absolute eradication of chaos from your job site. We
        understand that rubble is more than just debris—it is a safety hazard
        and a bottleneck to your progress. We deploy rapid-response tactical
        units and heavy-duty transport to instantly lift the burden of waste
        from our clients' shoulders. We are dedicated to providing a seamless
        transition from a cluttered environment to a project-ready
        environment—same hour, same day, every day.
      </ParagraphText>

      {/* SECTION 4: VALUES & OBJECTIVES */}
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
