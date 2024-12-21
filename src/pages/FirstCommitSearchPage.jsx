import React, { useState, useContext, useEffect } from "react";
import ListOfRepos from "../components/ListOfRepos";
import SearchRepo from "../components/SearchRepo";
import { RepoContext } from "../context/RepoContext";

import { BASE_URL_REPO } from "../utils/constants";
import headerLinkParser from "../utils/headerLinkParser";
import Pagination from "../components/Pagination";

const FirstCommitSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [paginationLinks, setPaginationLinks] = useState("");
  const {
    repoInputSearch,
    setRepoInputSearch,
    listOfRepos,
    setListOfRepos,
    isLoadingRepos,
    setIsLoadingRepos,
  } = useContext(RepoContext);

  useEffect(() => {
    if (searchInput !== "" && searchInput !== repoInputSearch) {
      setIsLoadingRepos(true);
      setRepoInputSearch(searchInput);
      fetch(`${BASE_URL_REPO}${searchInput}`)
        .then((resp) => {
          let myHeaders = resp.headers.get("link");
          if (myHeaders) {
            setPaginationLinks(headerLinkParser(myHeaders));
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

  return (
    <div className="container">
      <SearchRepo setSearchInput={setSearchInput} />

      {repoInputSearch === "" ? (
        <p className="text-muted">Seach something!</p>
      ) : (
        <ListOfRepos list={listOfRepos} isLoading={isLoadingRepos} />
      )}
      {/* {paginationLinks && <Pagination />} */}
    </div>
  );
};

export default FirstCommitSearchPage;
