import "./SingleCard.css";
import { BookType } from "../../../../types";

export const SingleCard = ({ author, title, genre }: BookType) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card__content-container">
          <h2 className="card__content-container__title">{title}</h2>
          <p className="card__content-container__author">by {author}</p>
        </div>
        <span className="card__genre">{genre}</span>
      </div>
    </div>
  );
};
