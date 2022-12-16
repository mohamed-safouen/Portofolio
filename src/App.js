import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css"

function App() {
  return (
    <div className="App">
    <ChakraProvider>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </ChakraProvider>
    </div>
  );
}

export default App;
