import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const query = graphql`
  query publicationListQuery($limit: Int!, $offset: Int!) {
    allSanityPublication(sort: { fields: _createdAt, order: DESC }, limit: $limit, skip: $offset) {
      nodes {
        id
        title
        _createdAt
        slug { current }
        coverImage { alt, asset { gatsbyImageData } }
      }
    }
  }
`;

function Publications({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const publications = data.allSanityPublication.nodes.map(pub => ({
    ...pub,
    publishedAt: pub._createdAt,
    categories: []
  }));

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Publications & Books" />
      <div className="container">
        <PageHeader title="Company Documents & Compliance" description="Access Moorosi Holdings' company profiles, B-BBEE certificates, CSD registration, and operational capabilities literature." />
        <BlogGrid blogs={publications} prefix="publications" />
        {numberOfPages > 1 && (
          <Pagination currentPage={currentPage} numberOfPages={numberOfPages} baseURL="/publications" />
        )}
      </div>
    </PageSpace>
  );
}
export default Publications;