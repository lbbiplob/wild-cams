import React from "react";
import { Link } from "react-router-dom";

const ErrorPath = () => {
  return (
    <div>
      <h1 className="text-7xl text-orange-400 mt-24">404</h1>
      <p>Page not found</p>
      <Link className="btn btn-primary" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPath;
