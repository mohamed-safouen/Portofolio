import * as React from "react";
import { useState,useEffect } from "react";
import { ChakraProvider} from "@chakra-ui/react";
import { Spinner,Flex } from "@chakra-ui/react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css"
import SkillsSection from "./Components/Skills";

function App() {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_WEB_ID;
  (function () {
   let d = document;
   let s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <ChakraProvider>
        {loading ? (
          <Flex height="100vh" alignItems="center" justifyContent="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#151f3b.500"
              size="xl"
            />
          </Flex>
        ) : (
          <>
            <Header />
            <About />
            <SkillsSection/>
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
