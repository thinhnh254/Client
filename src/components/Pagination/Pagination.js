import React from "react";
import { PagiItem } from "../";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ totalCount }) => {
  const pagination = usePagination(66, 2);
  return (
    <div className="flex items-center">
      {pagination?.map((el) => (
        <PagiItem key={el}>{el}</PagiItem>
      ))}
    </div>
  );
};

export default Pagination;
