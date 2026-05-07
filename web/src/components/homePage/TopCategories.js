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
      <SectionTitle className="centre__text">Industrial Capabilities/Our Core Services</SectionTitle>
      <ParagraphText className="centre__text">
        From household garden waste to major construction site clearing, we have the NP300 fleet and manpower to handle it all.
      </ParagraphText>
      <SectionTitle className="centre__text">Vision</SectionTitle>
        <ParagraphText className="hero__text centre__text">
          To redefine site clearing and waste management in Gauteng by setting the absolute standard for speed, reliability, and environmental responsibility.
        </ParagraphText>
        
        <SectionTitle className="centre__text">Mission</SectionTitle>
        <ParagraphText className="hero__text centre__text">
          To instantly remove the burden of construction debris and rubble from our clients' shoulders. We deploy rapid-response fleets and heavy-duty manpower to transform chaotic sites into clean, project-ready blank slates—same day, every day.
        </ParagraphText>
      <SectionTitle className="centre__text">Our Values</SectionTitle>
      <ValueGrid DiginotiveValues={DiginotiveValues} />
      <SectionTitle className="centre__text">Our Objectives</SectionTitle>
      <ObjectiveGrid objectives={objectives} />
      <ActivityGrid activities={activities} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;

