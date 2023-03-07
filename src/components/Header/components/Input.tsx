import { useCallback } from "react";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const onKeyUp = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.key?.toLowerCase() === "enter") {
        navigate(`/books/${searchValue}`);
        setSearchValue("");
        if (toggleSidebar) toggleSidebar();
      }
    },
    [searchValue, navigate, setSearchValue, toggleSidebar]
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
