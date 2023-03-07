import "./CardsContainer.css";
import { Loader } from "./components/Loader/Loader";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { BookType } from "types";
import { useBooks } from "contexts/BookContext";
import { SingleCard } from "./components/SingleCard/SingleCard";

interface Props {
  data: BookType[];
}

export const CardsContainer = ({ data }: Props) => {
  const { isLoading, error } = useBooks();

  if (isLoading) return <Loader />;

  if (!isLoading && !error && data.length === 0) return <NoMatch />;

  return (
    <section className="container">
      <div className="container__inner">
        <h1 className="container__inner__heading">Books</h1>
        {error && <h2 className="container__inner__heading--error">{error}</h2>}
        <div className="container__inner__cards-container">
          {data?.map((book, index) => {
            return <SingleCard key={index} {...book} />;
            //using the index as key because there is no unique id provided
          })}
        </div>
      </div>
    </section>
  );
};
