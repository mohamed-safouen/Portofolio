import {
  VStack,
  Heading,
  Box,
  Image,
  Text,Link,Button
} from "@chakra-ui/react";
import tic from "./../images/photo1.png";
import Ramadhan from "./../images/photo2.png";
import Weather from "./../images/photo3.png";
import Rent from "./../images/photo4.png";
const Project = [
  {
    Title: "Tic-Tac-Toe",
    image: tic,
    description: "Code the Game Tic-Tac-Toe with Javascript native /HTML/CSS",
    link: "https://mohamed-safouen.github.io/Tic-Tac-Toe/",
  },
  {
    Title: "Ramadhan",
    image: Ramadhan,
    description: "Countdown for Event with JS/HTML/CSS ",
    link: "https://mohamed-safouen.github.io/Ramadhan-Countdown/",
  },
  {
    Title: "Weather",
    image: Weather,
    description: "Weather App Using HTML/CSS/JS Using API from openweathermap.org ",
    link: "https://mohamed-safouen.github.io/Weather/",
  },
  {
    Title: "RentCar",
    image: Rent,
    description: "Rent Car Dashboard with JS/HTML/CSS with Bootstrap and Jquery Library",
    link: "https://dash-rent-hoo0azytn-rent-car-tn.vercel.app/",
  },
];
const Projects = () => {
  return (
    <Box backgroundColor="#000111" padding="3em">
      <Button
        _hover={{ backgroundColor: "#000A27" }}
        fontSize="2rem"
        margin="2rem auto"
        padding="2rem 4.9rem"
        maxWidth="20rem"
        border={"2px solid"}
        backgroundColor="black">
        Projects
      </Button>
      <Box
        display="flex"
        width="90%"
        textAlign="start"
        margin="0 auto"
        gap="5em"
        justifyContent="center"
        flexWrap="wrap">
        {Project.map((pro, index) => {
          return (
            <VStack key={index}>
              <Link href={pro.link} isExternal>
                <Box
                  transition="all .8s ease-in-out"
                  _hover={{
                    backgroundColor: "#000A27",
                    transform: "scale(1.2)",
                  }}
                  borderRadius="md"
                  bg="#14213D"
                  height="22em">
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
            </VStack>
          );
        })}
      </Box>
    </Box>
  );
};
export default Projects;
