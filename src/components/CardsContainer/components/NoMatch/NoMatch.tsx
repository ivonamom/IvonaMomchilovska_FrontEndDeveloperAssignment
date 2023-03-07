import { Link } from "react-router-dom";
import "./NoMatch.css";

export const NoMatch = () => {
  return (
    <div className="no-match-container">
      <div className="no-match-container__inner">
        <h2>There are no books matching your search.</h2>
        <p>
          Edit your search or <Link to="/">show all books</Link>
        </p>
      </div>
    </div>
  );
};
