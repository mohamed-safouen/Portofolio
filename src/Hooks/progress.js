import { useState,useEffect } from "react";
import "./../App.css";
const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = useState(0);

useEffect(() => {
    const handlerscroll=()=>{
      setValue(percent);
  };
window.addEventListener("scroll", handlerscroll); 
    return () => {
      window.removeEventListener("scroll", handlerscroll);
    };
},[percent]);

  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}%` }} className="progress" />
      </div>
    </div>
  );
};

export default ProgressBar;