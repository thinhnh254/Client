import React from "react";
import "./NotFoundPage.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1>Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
