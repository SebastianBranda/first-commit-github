import React, { useState } from "react";
import { RepoContext } from "./RepoContext";

const RepoProvider = ({ children }) => {
  const [repo, setRepo] = useState({ ok: "chau" });

  const [repoInputSearch, setRepoInputSearch] = useState("");
  const [listOfRepos, setListOfRepos] = useState([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);
  const [repoSearchPage, setRepoSearchPage] = useState(1);
  const [paginationLinks, setPaginationLinks] = useState();

  return (
    <RepoContext.Provider
      value={{
        repo,
        setRepo,
        repoInputSearch,
        setRepoInputSearch,
        listOfRepos,
        setListOfRepos,
        isLoadingRepos,
        setIsLoadingRepos,
        repoSearchPage,
        setRepoSearchPage,
        paginationLinks,
        setPaginationLinks,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
};

export default RepoProvider;
