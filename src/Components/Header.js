import { useState,useEffect } from "react";
import Hamburger from "./Hamburger/Hamburger";
import {
  Box,
  HStack,
  VStack,
  Link,
  Image,
  useMediaQuery,Divider
} from "@chakra-ui/react";
import logo from "./../images/logo.png";

import useScroll from "../Hooks/useScroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../style.css";

const Header = () => {
  const Links = ["Home", "About", "Projects", "Contact"];
  const [isLessThan767] = useMediaQuery("(max-width: 767px)");
  const [openHamburger, setOpenHamburger] = useState(false);
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };
   useEffect(() => {
     AOS.init();
   }, []);
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
    color ="white"
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
              <>
                <div className="hamburger" onClick={toggleHamburger}>
                  <Hamburger isOpen={openHamburger} />
                </div>
                {openHamburger ? (
                  <VStack
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    visibility="visible"
                    position={"fixed"}
                    height={"auto"}
                    backgroundColor="rgba(255, 255, 255, 0.9)"
                    right="0"
                    left={"0"}
                    top="0"
                    padding="2rem 4rem"
                    spacing={5}>
                    {Links.map((x, index) => {
                      return (
                        <>
                          <a
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            className="menu"
                            key={index}
                            href={`#${x}-section`}
                            onClick={handleClick(x)}>
                            {x}
                          </a>
                          <Divider
                            style={{
                              border: "grey solid 1px",
                              width: "15%",
                              margin: "0px",
                            }}
                          />
                        </>
                      );
                    })}
                  </VStack>
                ) : (
                  ""
                )}
              </>
            ) : (
              <HStack spacing={5}>
                {Links.map((x, index) => {
                  return (
                    <a
                      data-aos="zoom-in"
                      data-aos-duration="2000"
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
