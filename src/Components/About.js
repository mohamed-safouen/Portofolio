import { Text,Box, Heading, HStack, VStack,Image, Button, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import photo from "./../images/avatar.jpg";
import ProgressBar from "./../Hooks/progress";
import "./../App.css";
import file from"./../images/English-CV-safouen.pdf";

export const socials = [
  { url: "https://www.facebook.com/mohamedsafouen" },
  { url: "https://twitter.com/mohamed_safouen" },
  { url: "https://www.linkedin.com/in/med-safouen/" },
  { url: "https://github.com/mohamed-safouen" },
];
 const Skills = [
   { name: "HTML", value: 90 },
   { name: "CSS", value: 90 },
   { name: "REACT", value: 50 },
   { name: "JavaScript", value: 70 },
   { name: "JQuery", value: 80 },
   { name: "Boostrap", value: 80 },
   { name: "WordPress", value: 60 },
   { name: "SQL", value: 20 },
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
  
  
  return (
    <Box id="box" width={"100%"} backgroundColor={"#f5f5f8"} padding="2rem 0">
      <Box
        display={"flex"}
        width="90%"
        id="About"
        margin="0 auto"
        flexWrap="wrap"
        justifyItems={"center"}
        justifyContent="space-around">
        <Box>
          <Image boxSize="25rem" borderRadius={"50%"} src={photo}></Image>
        </Box>
        <VStack
          width={"50%"}
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
            <strong>Experience: </strong> +2 Years
          </Text>
          <Link
            href={file}
            download={"MohamedSafouen2022.pdf"}
            style={{ textDecoration: "none" ,margin:"1.7rem 0" }}>
            <Button
              colorScheme="facebook"
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
      <Box
        margin="6rem auto"
        display={"flex"}
        width="80%"
        flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          width="20rem"
          margin={"3em auto"}
          gap="3">
          <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
          <Heading fontSize="3rem" maxWidth="20rem" color={"#151f3b"}>
            Skills
          </Heading>
          <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
        </Box>
        <Box id="bars"
          display="grid"
          gridTemplateColumns="50% 50%"
          gridGap="2em"
          margin="2em 0">
          {Skills.map((skill, index) => {
            return (
              <div key={index} style={{ maxHeight: "12em" }}>
                <Text
                  textAlign="left"
                  fontFamily={"font-family: Poppins,sans-serif;"}>
                  {skill.name}
                </Text>
                <ProgressBar
                  style={{ margin: "1em 0" }}
                  width="100%"
                  percent={skill.value}
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default About;
