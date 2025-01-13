import React, { useState, useContext, useEffect } from "react";
import ListOfRepos from "../components/ListOfRepos";
import SearchRepo from "../components/SearchRepo";
import { RepoContext } from "../context/RepoContext";

import { BASE_URL_REPO } from "../utils/constants";
import headerLinkParser from "../utils/headerLinkParser";
import Pagination from "../components/Pagination";

const FirstCommitSearchPage = () => {
  const {
    repoInputSearch,
    setRepoInputSearch,
    repoSearchPage,
    setRepoSearchPage,
    listOfRepos,
    setListOfRepos,
    isLoadingRepos,
    setIsLoadingRepos,
    paginationLinks,
    setPaginationLinks,
  } = useContext(RepoContext);

  const [searchInput, setSearchInput] = useState(repoInputSearch);

  useEffect(() => {
    if (searchInput !== "" && searchInput !== repoInputSearch) {
      setIsLoadingRepos(true);
      setRepoInputSearch(searchInput);
      fetch(`${BASE_URL_REPO}${searchInput}&page=${repoSearchPage}`)
        .then((resp) => {
          const linkHeaders = resp.headers.get("link");
          if (linkHeaders) {
            setPaginationLinks(headerLinkParser(linkHeaders));
          } else {
            setPaginationLinks("");
          }
          return resp.json();
        })
        .then((myData) => {
          setListOfRepos(myData?.items);
          setIsLoadingRepos(false);
        });
    }
  }, [searchInput]);

  useEffect(() => {
    if (searchInput !== "" && searchInput == repoInputSearch) {
      fetch(`${BASE_URL_REPO}${searchInput}&page=${repoSearchPage}`)
        .then((resp) => {
          const linkHeaders = resp.headers.get("link");
          if (linkHeaders) {
            setPaginationLinks(headerLinkParser(linkHeaders));
          } else {
            setPaginationLinks("");
          }
          return resp.json();
        })
        .then((myData) => {
          setListOfRepos(myData?.items);
          setIsLoadingRepos(false);
        });
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [repoSearchPage]);

  return (
    <div className="container">
      <SearchRepo setSearchInput={setSearchInput} />

      {repoInputSearch === "" ? (
        <p className="text-muted">Seach something!</p>
      ) : (
        <ListOfRepos list={listOfRepos} isLoading={isLoadingRepos} />
      )}
      {paginationLinks && <Pagination paginationLinks={paginationLinks} />}
    </div>
  );
};

export default FirstCommitSearchPage;
