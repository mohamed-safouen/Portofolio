import { Box, HStack,VStack, Link, Image,useMediaQuery} from "@chakra-ui/react";
import logo from "./../images/logo.png"
import Hamburger from "./Hamburger/Hamburger";
import useScroll from "../Hooks/useScroll";
import "./../style.css"
import { useState } from "react";
const Header = () => {
  const Links=[
    {link:"Home2"},
    {link:"About"},
    {link:"Projects"},
    {link:"Contact"}
  ]
  const [isLessThan767] = useMediaQuery("(max-width: 767px)");
  const [openHamburger, setOpenHamburger] = useState(false);
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };
  const Scrolling = useScroll();
  const handleClick = (a) => () => {
    const element = document.getElementById(a);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    toggleHamburger();
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
              <div>
                <div className="hamburger" onClick={toggleHamburger}>
                  <Hamburger isOpen={openHamburger} />
                </div>
                {openHamburger ? (
                  <VStack
                    visibility="visible"
                    position={"fixed"}
                    height={"auto"}
                    backgroundColor={"rgba(255,255,255, 0.9)"}
                    top="0"
                    left="0"
                    width="100vw"
                    padding="2rem"
                    zIndex={"9"}
                    spacing={5}>
                    {Links.map((x, index) => {
                      return (
                        <a
                          style={{ transition: "all 5.3s ease-in-out" }}
                          className="menu"
                          key={index}
                          href={`#${x.link}-section`}
                          onClick={handleClick(x.link)}>
                          {x.link}
                        </a>
                      );
                    })}
                  </VStack>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <HStack spacing={5}>
                {Links.map((x, index) => {
                  return (
                    <a
                      className="menu"
                      key={index}
                      href={`#${x.link}-section`}
                      onClick={handleClick(x.link)}>
                      {x.link}
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
