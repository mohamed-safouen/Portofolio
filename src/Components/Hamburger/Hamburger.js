
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
const Hamburger=({isOpen})=>{
    return (
      <>
       {isOpen ? <CloseIcon/>:<HamburgerIcon />}
        </>
      
    );
}
export default Hamburger;
