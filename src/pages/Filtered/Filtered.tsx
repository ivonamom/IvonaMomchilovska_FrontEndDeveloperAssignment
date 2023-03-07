import { CardsContainer } from "components/CardsContainer/CardsContainer";
import { useBooks } from "contexts/BookContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BookType } from "types";

export const Filtered = () => {
  const { allData } = useBooks();
  const navigate = useNavigate();
  const { query } = useParams();
  console.log(query);

  const [filteredData, setFilteredData] = useState<BookType[]>([]);

  //filtering the books that include the searched value
  useEffect(() => {
    const filteredArr = allData.filter(
      (book) =>
        book.author.toLowerCase().includes(query!.toLowerCase()) ||
        book.title.toLowerCase().includes(query!.toLowerCase()) ||
        book.genre.toLowerCase().includes(query!.toLowerCase())
    );
    setFilteredData(filteredArr);
  }, [query, allData, navigate]);

  // sending the filtered books to be rendered
  return <CardsContainer data={filteredData} />;
};
