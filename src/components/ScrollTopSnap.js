import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopSnap = () => {
  const { pathname } = useLocation();
  //Scrolls to the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }, [pathname]);
  return null;
};

export default ScrollTopSnap;
