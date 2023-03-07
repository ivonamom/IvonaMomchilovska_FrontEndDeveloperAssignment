import { Link } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-container__h1">404</h1>
      <h2>Page not found</h2>
      <Link to="/" className="error-container__link">
        Back to homepage
      </Link>
    </div>
  );
};
