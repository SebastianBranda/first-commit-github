import React, { useState, useContext, useEffect } from "react";
import ListOfRepos from "../components/ListOfRepos";
import SearchRepo from "../components/SearchRepo";
import { RepoContext } from "../context/RepoContext";

import { BASE_URL_REPO } from "../utils/constants";

const FirstCommitSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
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
        .then((resp) => resp.json())
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
    </div>
  );
};

export default FirstCommitSearchPage;
