import { useState, useEffect } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    // function  run on scroll
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scroll) {
        setScroll(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
     window.addEventListener("scroll", updateScroll);
     return () => {
       window.removeEventListener("scroll", updateScroll);
     };
  }, [scroll]); // run when scroll direction changes

  return scroll;
}

export default useScroll;
