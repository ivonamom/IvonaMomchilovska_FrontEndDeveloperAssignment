import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookProvider } from "./contexts/BookContext";
import { Home } from "./pages/Home/Home";
import { Filtered } from "./pages/Filtered/Filtered";
import { Error } from "./pages/Error/Error";
import { Header } from "components/Header/Header";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:query"} element={<Filtered />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;
