import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { SearchModalContext } from "../../contexts/searchModalContext";
import { SearchModalStyles } from "../../styles/search/SearchModalStyles";
import ActionButton from "../buttons/ActionButton";
import SearchResult from "./SearchResult";
import SearchField from "./SearchField";

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
    localSearchAuthors {
      publicStoreURL
      publicIndexURL
    }
    localSearchActivities {
      publicStoreURL
      publicIndexURL
    }
    localSearchPublications {
      publicStoreURL
      publicIndexURL
    }
    localSearchObjectives {
      publicStoreURL
      publicIndexURL
    }
    localSearchValues {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState("");

  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
  const [activitiesIndexStore, setActivitiesIndexStore] = useState(null);
  const [publicationsIndexStore, setPublicationsIndexStore] = useState(null);
  const [objectivesIndexStore, setObjectivesIndexStore] = useState(null);
  const [valuesIndexStore, setValuesIndexStore] = useState(null);

  const data = useStaticQuery(query);

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = "hidden";
      setSearchQuery("");
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isSearchModalOpen]);

  const handleOnFocus = async () => {
    if (blogsIndexStore && publicationsIndexStore) return;
    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: authorsIndex },
      { data: authorsStore },
      { data: activitiesIndex },
      { data: activitiesStore },
      { data: publicationsIndex },
      { data: publicationsStore },
      { data: objectivesIndex },
      { data: objectivesStore },
      { data: valuesIndex },
      { data: valuesStore },
    ] = await Promise.all([
      axios.get(`${data.localSearchBlogs.publicIndexURL}`),
      axios.get(`${data.localSearchBlogs.publicStoreURL}`),
      axios.get(`${data.localSearchCategories.publicIndexURL}`),
      axios.get(`${data.localSearchCategories.publicStoreURL}`),
      axios.get(`${data.localSearchAuthors.publicIndexURL}`),
      axios.get(`${data.localSearchAuthors.publicStoreURL}`),
      axios.get(`${data.localSearchActivities.publicIndexURL}`),
      axios.get(`${data.localSearchActivities.publicStoreURL}`),
      axios.get(`${data.localSearchPublications.publicIndexURL}`),
      axios.get(`${data.localSearchPublications.publicStoreURL}`),
      axios.get(`${data.localSearchObjectives.publicIndexURL}`),
      axios.get(`${data.localSearchObjectives.publicStoreURL}`),
      axios.get(`${data.localSearchValues.publicIndexURL}`),
      axios.get(`${data.localSearchValues.publicStoreURL}`),
    ]);

    setBlogsIndexStore({ index: blogsIndex, store: blogsStore });
    setCategoriesIndexStore({ index: categoriesIndex, store: categoriesStore });
    setAuthorsIndexStore({ index: authorsIndex, store: authorsStore });
    setActivitiesIndexStore({ index: activitiesIndex, store: activitiesStore });
    setPublicationsIndexStore({
      index: publicationsIndex,
      store: publicationsStore,
    });
    setObjectivesIndexStore({ index: objectivesIndex, store: objectivesStore });
    setValuesIndexStore({ index: valuesIndex, store: valuesStore });
  };

  if (!isSearchModalOpen) return null;

  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          authorsIndexStore &&
          activitiesIndexStore &&
          publicationsIndexStore &&
          objectivesIndexStore &&
          valuesIndexStore && (    
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                authorsIndexStore={authorsIndexStore}
                activitiesIndexStore={activitiesIndexStore}
                publicationsIndexStore={publicationsIndexStore}
                objectivesIndexStore={objectivesIndexStore}
                valuesIndexStore={valuesIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
