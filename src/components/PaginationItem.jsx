import React, { useContext } from "react";
import { RepoContext } from "../context/RepoContext";

const PaginationItem = ({ content, link, page }) => {
  const { repoSearchPage, setRepoSearchPage } = useContext(RepoContext);

  const handleClick = () => {
    setRepoSearchPage(page);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={
          repoSearchPage === page
            ? "pagination-item-disabled"
            : "pagination-item"
        }
      >
        {page}
      </div>
    </>
  );
};

export default PaginationItem;
