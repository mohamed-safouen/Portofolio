import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css"

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
  return (
    <ChakraProvider>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
