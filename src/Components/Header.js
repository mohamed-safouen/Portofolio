import {
  Box,
  HStack,
  VStack,
  Link,
  Image,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import logo from "./../images/logo.png"
import { HamburgerIcon} from "@chakra-ui/icons";
import useScroll from "../Hooks/useScroll";
import { useState } from "react";
import "./../style.css"
const Header = () => {
  const Links=[
    "Home",
    "About",
    "Projects",
    "Contact"
  ]
  const [isLessThan767] = useMediaQuery("(max-width: 767px)");
  const Scrolling = useScroll();
  const handleClick = (a) => () => {
    const element = document.getElementById(a);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      document.getElementsByClassName("css-r6z5ec")[0].style.visibility = "hidden";
      
    }
  
  };
  return (
    <Box
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".all 0.5s"
      transitionTimingFunction="ease-in-out"
      position={Scrolling === "down" ? "" : "sticky"}
      backgroundColor={Scrolling === "down" ? "" : "#eaedf7"}
      zIndex="10">
      <Box margin="0 auto" maxWidth={"95%"}>
        <HStack justifyContent="space-between" alignItems="center">
          <Link gap={2} display="flex" fontFamily="Antipasto">
            <Image width={"20rem"} height="5rem" src={logo}></Image>
          </Link>
          <nav>
            {isLessThan767 ? (
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} />
                <MenuList  as={VStack}>
                  {Links.map((x, index) => {
                    return (
                      <a
                        className="menu"
                        key={index}
                        href={`#${x}-section`}
                        onClick={handleClick(x)}>
                        {x}
                      </a>
                    );
                  })}
                </MenuList>
              </Menu>
            ) : (
              <HStack spacing={5}>
                {Links.map((x, index) => {
                  return (
                    <a
                      className="menu"
                      key={index}
                      href={`#${x}-section`}
                      onClick={handleClick(x)}>
                      {x}
                    </a>
                  );
                })}
              </HStack>
            )}
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
