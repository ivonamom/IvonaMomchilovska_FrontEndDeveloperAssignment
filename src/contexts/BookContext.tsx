import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { BookType } from "../types";

interface BookContextValue {
  allData: BookType[];
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

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  //fetching the data
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data: BookType[]) => {
        const sortedData = data.sort((a, b) => (a.author > b.author ? 1 : -1));
        setAllData(sortedData);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <BookContext.Provider value={{ allData, isLoading, error }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
