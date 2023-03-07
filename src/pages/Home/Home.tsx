import { CardsContainer } from "components/CardsContainer/CardsContainer";
import { useBooks } from "contexts/BookContext";

export const Home = () => {
  const { allData } = useBooks();
  //sending all books to be rendered
  return <CardsContainer data={allData} />;
};
