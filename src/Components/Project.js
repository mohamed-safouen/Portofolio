import {
  VStack,
  Heading,
  Box,
  Image,
  Text,Link
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import tic from "./../images/photo1.png";
import Weather from "./../images/photo3.png";
import Rent from "./../images/photo4.png";
import Resto from "./../images/photo5.png";
import { useEffect } from "react";
const Project = [
  {
    Title: "Tic-Tac-Toe",
    image: tic,
    description: "Code the Game Tic-Tac-Toe with Javascript native /HTML/CSS",
    link: "https://mohamed-safouen.github.io/Tic-Tac-Toe/",
  },
  {
    Title: "Weather",
    image: Weather,
    description:
      "Weather App Using HTML/CSS/JS Using API from openweathermap.org ",
    link: "https://mohamed-safouen.github.io/Weather/",
  },
  {
    Title: "RentCar",
    image: Rent,
    description:
      "Rent Car Dashboard with JS/HTML/CSS with Bootstrap and Jquery Library",
    link: "https://dash-rent-hoo0azytn-rent-car-tn.vercel.app/",
  },
  {
    Title: "Little Lemon Restaurant",
    image: Resto,
    description: "Final project for Meta Front-End Developer",
    link: "https://mohamed-safouen.github.io/Little-Limon-Restaurant/",
  },
];
const Projects = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <Box padding="3em">
      <Box
        id="Projects"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        width="20rem"
        margin={"3em auto"}
        gap="3">
        <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
        <Heading fontSize="3rem" maxWidth="20rem" color={"#151f3b"}>
          Projects
        </Heading>
        <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
      </Box>
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Box
          display="flex"
          width="90%"
          textAlign="start"
          margin="2rem auto"
          gap="5em"
          justifyContent="center"
          flexWrap="wrap">
          {Project.map((pro, index) => {
            return (
              <VStack key={index}>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={pro.link}
                    isExternal>
                    <Box
                      transition="all .5s ease-in-out"
                      _hover={{
                        backgroundColor: "#151f3b",
                        transform: "scale(1.2)",
                      }}
                      borderRadius="md"
                      bg="#14213D"
                      height="25em">
                      <Image
                        margin="0.5em 0"
                        boxSize="20em"
                        height={"15em"}
                        borderRadius="md"
                        src={pro.image}
                      />
                      <Heading
                        padding="40 32"
                        margin="1em"
                        as="h3"
                        size="1.5em"
                        color="White">
                        {pro.Title}
                      </Heading>
                      <Text
                        padding="40 32"
                        maxWidth="20em"
                        size="18px"
                        color="#8491A0"
                        px="1em"
                        pb="15px">
                        {pro.description}
                      </Text>
                    </Box>
                  </Link>
                </div>
              </VStack>
            );
          })}
        </Box>
      </div>
    </Box>
  );
};
export default Projects;
