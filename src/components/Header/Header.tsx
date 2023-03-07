import React, { useCallback } from "react";
import { useState } from "react";
import { CollapseSidebar } from "./components/CollapseSidebar/CollapseSidebar";
import { Input } from "./components/Input";
import "./Header.css";
import logo from "./enterprise-league-logo.png";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  if (isOpen) {
    return (
      <CollapseSidebar
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        toggleSidebar={toggleSidebar}
      />
    );
  }

  return (
    <React.Fragment>
      <header>
        <div className="header__logo-container">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__input-container">
          <Input
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            className="header__input-container__input"
          />
          <i
            className="header__input-container__icon--search fa-solid fa-magnifying-glass fa-2x "
            onClick={() => {
              navigate(`/books/${searchValue}`);
              setSearchValue("");
            }}
          />
        </div>
        <i
          className="fa-solid fa-bars fa-2x header__hamburger-menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
    </React.Fragment>
  );
};
