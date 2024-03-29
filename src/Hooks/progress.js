import { useState,useEffect } from "react";
import "./../App.css";
const ProgressBar = ({ percent }) => {
const [value, setValue] = useState(0);

useEffect(() => {
    const handlerscroll=()=>{
      const scrollY = window.scrollY;
      if (scrollY) {
        const h_About = document.getElementById("Skills").clientHeight;
        
        if (scrollY > h_About - 233) {
          setValue(percent);
        } else {
          setValue(0);
        }
      }
  };

window.addEventListener("scroll", handlerscroll); 
    return () => {
      window.removeEventListener("scroll", handlerscroll);
    };
},[percent]);

  return (
    <div>
      <div className="progress-div">
        <div style={{ width: `${value}%` }} className="progress"> {value} % </div>
      </div>
    </div>
  );
};

export default ProgressBar;