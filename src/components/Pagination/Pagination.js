import React from "react";
import { PagiItem } from "..";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ totalCount }) => {
  console.log(totalCount);
  const pagination = usePagination(totalCount, 1);
  return (
    <div className="flex items-center">
      {pagination?.map((el) => (
        <PagiItem key={el}>{el}</PagiItem>
      ))}
    </div>
  );
};

export default Pagination;
