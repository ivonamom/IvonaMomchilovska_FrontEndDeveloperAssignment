import { useBooks } from "contexts/BookContext";
import { useCallback } from "react";

interface Props {
  setSearchValue: (value: string) => void;
  searchValue: string;
  toggleSidebar?: () => void;
  className: string;
}

export const Input = ({
  setSearchValue,
  searchValue,
  toggleSidebar,
  className,
}: Props) => {
  const { handleSearch } = useBooks();

  const onKeyUp = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.key?.toLowerCase() === "enter") {
        handleSearch(searchValue);
        setSearchValue("");
        if (toggleSidebar) toggleSidebar();
      }
    },
    [searchValue, handleSearch, setSearchValue, toggleSidebar]
  );

  return (
    <input
      className={className}
      type="text"
      placeholder="Search for books..."
      autoFocus
      onChange={(ev) => setSearchValue(ev.target.value)}
      value={searchValue}
      onKeyUp={onKeyUp}
    />
  );
};
