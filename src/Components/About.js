import { Text,Box, Heading, HStack, VStack,Image, Button, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";

import photo from "./../images/avatar.jpg";

import "./../App.css";
import file from "./../files/Mohamed's Resume.pdf";

export const socials = [
  { url: "https://www.linkedin.com/in/med-safouen/" },
  { url: "https://twitter.com/mohamed_safouen" },
  { url: "https://github.com/mohamed-safouen" },
  { url: "https://stackoverflow.com/users/19407251/mohamed-safouen-naguez" },
];
const About = () => {
  const title = "I'm Front End Developer";
  const [type, setType] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setType(title.slice(0, type.length + 1));
    }, 200);
    if (type === title) {
      setTimeout(() => {
        setType("");
      }, 2000);
    }
  }, [type]);
  useEffect(() => {
    AOS.init();
  }, []);
  
   const [isLoading, setIsLoading] = useState(false);

   const handleClick = () => {
     setIsLoading(true);
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   };
  return (
    <Box id="box" width={"100%"} backgroundColor={"#f5f5f8"} padding="5rem 0">
      <Box
        display={"flex"}
        width="90%"
        id="About"
        margin="0 auto"
        flexWrap="wrap"
        alignItems={"center"}
        justifyItems={"center"}
        justifyContent="space-around">
        <Box
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-mirror="true">
          <Image boxSize="25rem" borderRadius={"50%"} src={photo}></Image>
        </Box>
        <VStack
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-mirror="true"
          width={{base:"80%",md:"50%"}}
          alignItems="start"
          fontWeight="500"
          lineHeight={"normal"}
          spacing="19"
          height={"auto"}>
          <Text
            fontSize="calc(1rem + 4*(100vw - 18.75rem)/1620)"
            padding={"1rem 0"}
            color={"#151f3b"}>
            # Who I'am
          </Text>
          <Heading
            as="h1"
            size={"2xl"}
            fontWeight="600"
            lineHeight={"normal"}
            color={"#151f3b"}>
            Hi I'm
          </Heading>
          <Heading as={"h4"} size="lg" fontWeight="400" color={"#151f3b"}>
            Mohamed Safouen Naguez
          </Heading>
          <Heading height={"1rem"} as="h4" size="2rem" color={"#676767"}>
            {type}
          </Heading>
          <Text fontSize={"0.9rem"}>
            Professionally connected with the web development industry and
            information technology for many years.Well-organised person, problem
            solver, independent employee with high attention to details
          </Text>
          <Text fontSize={"0.99rem"}>
            <strong>Email: </strong>mohamedsafouen@gmail.com
          </Text>
          <Text fontSize={"0.99rem"}>
            <strong>Phone: </strong>+21655339338
          </Text>
          <Text fontSize={"0.99rem"}>
            <strong>Experience: </strong> +{new Date().getFullYear() - 2021} Years
          </Text>
          <Link
            href={file}
            download={"MohamedSafouen2022.pdf"}
            style={{ textDecoration: "none", margin: "1.7rem 0" }}>
            <Button
              isLoading={isLoading}
              onClick={handleClick}
              variant="solid"
              colorScheme="facebook"
              target="_blank"
              size="lg"
              _hover={{
                bg: "transparent",
                color: "#151f3b",
                border: "2px solid #151f3b",
              }}>
              Downoald CV
            </Button>
          </Link>
          <HStack spacing={5}>
            {socials.map((social, index) => {
              return (
                <SocialIcon
                  key={index}
                  bgColor="white"
                  fgColor="#1f232c"
                  url={social.url}
                  target="_blank"
                />
              );
            })}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
export default About;
