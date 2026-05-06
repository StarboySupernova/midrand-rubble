import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { format } from "date-fns";
import { SearchResultItemStyles } from "../../styles/search/SearchResultItemStyles";
import ParagraphText from "../typography/ParagraphText";
import { Title } from "../typography/Title";

import { SearchModalContext } from "../../contexts/searchModalContext";

function BlogSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/spotlight/${blog.slug?.current}`} 
      onClick={() => closeSearchModal()}
    >
      {/* Safely check if the image and asset exist */}
      {blog.coverImage?.asset && (
        <GatsbyImage
          image={blog.coverImage.asset.gatsbyImageData}
          alt={blog.coverImage.alt || blog.title}
          className="img"
        />
      )}
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategorySearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles> 
  );
}

function AuthorSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/team/${author.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      {/* Safety check to prevent crash if image is missing */}
      {author.profileImage && (
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={author.profileImage.alt || author.name}
          className="authorProfileImg"
        />
      )}
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

function ActivitySearchResultItem({ activity }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/activities/${activity.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{activity.title}</Title>
    </SearchResultItemStyles>
  );
}

function PublicationSearchResultItem({ publication }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/publications/${publication.slug?.current}`}
      onClick={() => closeSearchModal()}
    >
      {publication.coverImage?.asset && (
        <GatsbyImage
          image={publication.coverImage.asset.gatsbyImageData}
          alt={publication.coverImage.alt || publication.title}
          className="img"
        />
      )}
      <Title className="title">{publication.title}</Title>
    </SearchResultItemStyles>
  );
}

function ObjectiveSearchResultItem({ objective }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles to="/" onClick={() => closeSearchModal()}>
      <Title className="title">{objective.title}</Title>
    </SearchResultItemStyles>
  );
}

function ValueSearchResultItem({ value }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles to="/" onClick={() => closeSearchModal()}>
      <Title className="title">{value.title}</Title>
    </SearchResultItemStyles>
  );
}

export {
  CategorySearchResultItem,
  BlogSearchResultItem,
  AuthorSearchResultItem,
  ActivitySearchResultItem,
  PublicationSearchResultItem,
  ObjectiveSearchResultItem,
  ValueSearchResultItem,
};
