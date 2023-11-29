import clsx from "clsx";
import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const PagiItem = ({ children }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const location = useLocation();

  const handlePagination = () => {
  const queries = Object.fromEntries([...params])

    if (Number(children)) {
      queries.page = children;
    }

    navigate({
      pathname: location?.pathname,
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
