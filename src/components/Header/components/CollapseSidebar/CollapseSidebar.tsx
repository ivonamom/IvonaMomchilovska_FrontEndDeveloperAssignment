import { useNavigate } from "react-router";
import { Input } from "../Input";
import "./CollapseSidebar.css";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  toggleSidebar: () => void;
}

export const CollapseSidebar = ({
  searchValue,
  setSearchValue,
  toggleSidebar,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="collapse-sidebar">
      <i
        className="fa-solid fa-close fa-2x collapse-sidebar__button--close"
        onClick={toggleSidebar}
      />
      <Input
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        toggleSidebar={toggleSidebar}
        className="collapse-sidebar__input"
      />
      <button
        className="collapse-sidebar__button--search"
        onClick={() => {
          toggleSidebar();
          navigate(`/${searchValue}`);
          setSearchValue("");
        }}
      >
        Search
      </button>
      <i className="fa-brands fa-searchengin fa-8x"></i>
    </div>
  );
};
