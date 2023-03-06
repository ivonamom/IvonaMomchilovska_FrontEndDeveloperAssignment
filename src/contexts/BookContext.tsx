import { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import { BookType } from "../types";

interface BookContextValue {
  allData: BookType[];
  filteredData: BookType[];
  handleSearch: (value: string) => void;
  isLoading: boolean;
  error: string;
}

export const BookContext = createContext<BookContextValue>(
  {} as BookContextValue
);

interface Props {
  children: React.ReactNode;
}

export const BookProvider = ({ children }: Props) => {
  const [allData, setAllData] = useState<BookType[]>([]);
  const [filteredData, setFilteredData] = useState<BookType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  //fetching the data
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data: BookType[]) => {
        const sortedData = data.sort((a, b) => (a.author > b.author ? 1 : -1));
        setAllData(sortedData);
        //to display all books at first
        setFilteredData(sortedData);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  //function to filter the books using the search value - will be sent through props to header
  const handleSearch = useCallback(
    (searchValue: string) => {
      const filteredArr = allData!.filter(
        (book) =>
          book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
          book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredArr);
      navigate(`/${searchValue}`);
    },
    [allData]
  );

  return (
    <BookContext.Provider
      value={{ allData, filteredData, handleSearch, isLoading, error }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
