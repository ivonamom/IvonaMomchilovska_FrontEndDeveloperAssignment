import { CardsContainer } from "components/CardsContainer/CardsContainer";
import { useBooks } from "contexts/BookContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BookType } from "types";

export const Filtered = () => {
  const { allData } = useBooks();
  const navigate = useNavigate();

  const { query } = useParams();
  const [filteredData, setFilteredData] = useState<BookType[]>([]);
  //function to filter the books using the search value - will be sent through props to header

  useEffect(() => {
    const filteredArr = allData!.filter(
      (book) =>
        book.author.toLowerCase().includes(query!.toLowerCase()) ||
        book.title.toLowerCase().includes(query!.toLowerCase()) ||
        book.genre.toLowerCase().includes(query!.toLowerCase())
    );
    setFilteredData(filteredArr);
    navigate(`/${query}`);
  }, [query, allData, navigate]);

  return <CardsContainer data={filteredData} />;
};
