import clsx from "clsx";
import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const PagiItem = ({ children }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { shop } = useParams;

  const handlePagination = () => {
    let param = [];
    for (let i of params.entries()) {
      param.push(i);
    }

    const queries = {};
    for (let i of param) {
      queries[i[0]] = i[1];
    }

    if (Number(children)) {
      queries.page = children;
    }

    navigate({
      pathname: `/shop`,
      search: createSearchParams(queries).toString(),
    });
  };

  return (
    <button
      className={clsx(
        "w-10 h-10 flex justify-center",
        !Number(children) && "items-end pb-2",
        Number(children) && "items-center hover:rounded-full hover:bg-gray-300"
      )}
      onClick={handlePagination}
      type="button"
      disabled={!Number(children)}
    >
      {children}
    </button>
  );
};

export default PagiItem;
