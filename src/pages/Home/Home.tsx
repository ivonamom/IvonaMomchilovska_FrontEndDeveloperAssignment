import { CardsContainer } from "components/CardsContainer/CardsContainer";
import { useBooks } from "contexts/BookContext";

export const Home = () => {
  const { allData } = useBooks();
  return <CardsContainer data={allData} />;
};
