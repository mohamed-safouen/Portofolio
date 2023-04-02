
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
const Hamburger=({isOpen})=>{
    return (
      <>
        {isOpen ? <CloseIcon color="black" /> : <HamburgerIcon color="black" />}
      </>
    );
}
export default Hamburger;
