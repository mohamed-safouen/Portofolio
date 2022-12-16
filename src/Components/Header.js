import { Heading,Box, HStack,Text} from "@chakra-ui/react";
import Hamburger from "./Hamburger";
import "./../style.css"
import { useState } from "react";
const Header = () => {
  const Links=[
    {link:"Home"},
    {link:"About"},
    {link:"Projects"},
    {link:"Contact"}
  ]
  const [openHamburger,setOpenHamburger]=useState(false);
  const toggleHamburger=()=>{
    setOpenHamburger(!openHamburger)
  }
    
  return (
    <>
      <Box backgroundColor="rgba(0, 0, 0, 0.1)" margin="0 auto">
        <HStack
          px={16}
          py={2}
          justifyContent="space-between"
          alignItems="center">
          <Heading
            gap={2}
            display="flex"
            fontFamily="Antipasto"
            as="h1"
            size="lg">
            <Text as="b" fontSize="4xl">
              Mohamed
            </Text>
            <Text as="b" fontSize="4xl" color={"#5B6586"}>
              Safouen
            </Text>
          </Heading>
          <nav>
            <HStack display={openHamburger ? "flex" : "none"} spacing={20}>
              {Links.map((x, index) => {
                return (
                  <a className="menu" key={index} href={`#${x.link}`}>
                    {x.link}
                  </a>
                );
              })}
            </HStack>
            <Hamburger onClick={toggleHamburger} />
          </nav>
        </HStack>
      </Box>
    </>
  );
};
export default Header;
