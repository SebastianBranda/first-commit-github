import React, { useContext } from "react";
import PaginationItem from "./PaginationItem";
import { RepoContext } from "../context/RepoContext";

const Pagination = ({ paginationLinks }) => {
  const { repoSearchPage } = useContext(RepoContext);
  const paginationItems = () => {
    if (!paginationLinks) return <></>;
    else {
      const itemsNoDuplicates = paginationLinks.reduce((acc, cur, index) => {
        acc[cur.page] = cur;
        return acc;
      }, []);

      itemsNoDuplicates[repoSearchPage] = { page: repoSearchPage };

      const renderPaginationItems = itemsNoDuplicates.map((item) => (
        <PaginationItem
          content={item.rel}
          link={item.link}
          key={item.page}
          page={item.page}
        />
      ));
      return renderPaginationItems;
    }
  };

  return <div className="pagination">{paginationItems()}</div>;
};

export default Pagination;
