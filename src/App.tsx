import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookProvider } from "./contexts/BookContext";
import { Home } from "./pages/Home/Home";
import { Filtered } from "./pages/Filtered/Filtered";
import { Error } from "./pages/Error/Error";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { BackToTopButton } from "components/BackToTopButton/BackToTopButton";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const updateScrolled = useCallback(() => {
    if (window.scrollY >= 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrolled);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, [updateScrolled]);

  return (
    <div className="App">
      <BookProvider>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:query"} element={<Filtered />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BookProvider>
      {isScrolled && <BackToTopButton />}
      <Footer />
    </div>
  );
}

export default App;

//TODO:
// check and optimize code
