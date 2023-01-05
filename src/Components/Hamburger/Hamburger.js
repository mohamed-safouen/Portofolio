import "./hamburger.css"
const Hamburger=({isOpen})=>{
    return (
      <>
        <div className="hamburger">
          <div className="burger " style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)"}}/>
          <div className="burger " style={{visibility: isOpen ? 'hidden' : 'visible'}}/>
          <div className="burger " style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}/>
        </div>
      </>
    );
}
export default Hamburger;