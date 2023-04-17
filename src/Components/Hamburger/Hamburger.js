
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
const Hamburger=({isOpen})=>{
    return (
      <>
        {isOpen ? (
          <CloseIcon boxSize={"1.8rem"} color="black" />
        ) : (
          <HamburgerIcon color="black" boxSize={"1.8rem"} />
        )}
      </>
    );
}
export default Hamburger;
