import React from "react";
import { graphql } from "gatsby";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import PageHeader from "../components/PageHeader";
import ActivityGrid from "../components/category/ActivityGrid";
import Pagination from "../components/Pagination";

export const ActivityListQuery = graphql`
  query activitiesQuery($limit: Int!, $offset: Int!) {
    allSanityActivity(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Activity({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const activities = data.allSanityActivity.nodes;

  return (
    <>
      <SEO title="Core Services" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
              title="Core Services & Divisions"
              description="Uncompromising capability. We deploy specialized fleets for abnormal loads and execute integrated facility management—from MEP, Fire Safety, and Asphalt Resurfacing, to elite Security and Hygiene services."
          />
          <ActivityGrid activities={activities} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/activities"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Activity;
