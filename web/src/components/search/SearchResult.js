import React from "react";
import { useFlexSearch } from "react-use-flexsearch";
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ActivitySearchResultItem,
  PublicationSearchResultItem,
  ObjectiveSearchResultItem,
  ValueSearchResultItem,
} from "./SearchResultItem";
import ParagraphText from "../typography/ParagraphText";

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  activitiesIndexStore,
  publicationsIndexStore,
  objectivesIndexStore,
  valuesIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store,
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store,
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store,
  );
  const activitiesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(activitiesIndexStore.index),
    activitiesIndexStore.store,
  );
  const publicationsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(publicationsIndexStore.index),
    publicationsIndexStore.store,
  );
  const objectivesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(objectivesIndexStore.index),
    objectivesIndexStore.store,
  );
  const valuesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(valuesIndexStore.index),
    valuesIndexStore.store,
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    activitiesResult.length === 0 &&
    publicationsResult.length === 0 &&
    objectivesResult.length === 0 &&
    valuesResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Insights & News</ParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {publicationsResult.length > 0 && (
        <>
          <ParagraphText>Corporate Credentials</ParagraphText>
          {publicationsResult.map((result) => (
            <PublicationSearchResultItem key={result.id} publication={result} />
          ))}
        </>
      )}
      {activitiesResult.length > 0 && (
        <>
          <ParagraphText>Operational Pillars</ParagraphText>
          {activitiesResult.map((result) => (
            <ActivitySearchResultItem key={result.id} activity={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Sectors</ParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Leadership Team</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
      {objectivesResult.length > 0 && (
        <>
          <ParagraphText>Our Objectives</ParagraphText>
          {objectivesResult.map((result) => (
            <ObjectiveSearchResultItem key={result.id} objective={result} />
          ))}
        </>
      )}
      {valuesResult.length > 0 && (
        <>
          <ParagraphText>Our Values</ParagraphText>
          {valuesResult.map((result) => (
            <ValueSearchResultItem key={result.id} value={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
