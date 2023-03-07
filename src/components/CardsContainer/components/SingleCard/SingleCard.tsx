import "./SingleCard.css";
import { BookType } from "../../../../types";

export const SingleCard = ({ author, title, genre }: BookType) => {
  return (
    <div className="col">
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <p className="card__author">by {author}</p>
        <span className="card__genre">{genre}</span>
      </div>
    </div>
  );
};
