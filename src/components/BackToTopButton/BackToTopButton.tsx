import { useCallback } from "react";
import "./BackToTopButton.css";

export const BackToTopButton = () => {
  const backToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button onClick={backToTop} className="back-to-top">
      Back to top &uarr;
    </button>
  );
};
