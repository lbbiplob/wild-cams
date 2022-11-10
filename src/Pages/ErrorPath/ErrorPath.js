import { Link } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";

const ErrorPath = () => {
  useTitle("Not Found");
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
