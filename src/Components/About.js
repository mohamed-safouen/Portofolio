import { Progress,Text,Avatar, Box, Heading, HStack, VStack, Button } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import photo from "./../images/avatar.jpg";
import { socials } from "./Data";
import ProgressBar from "./../Hooks/progress";
import "./../App.css";
const About = () => {
  const Skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "REACT", value: 50 },
    { name: "JavaScript", value: 70 },
    { name: "JQuery", value: 80 },
    { name: "Boostrap", value: 80 },
    { name: "WordPress", value: 60 },
    { name: "PHP", value: 20 },
  ];
  return (
    <Box>
      <Box
        id="About"
        justifyContent="center"
        alignItems="center"
        width="80%"
        color="white"
        margin="0 auto"
        padding="5em 0">
        <VStack margin="3em auto">
          <Button
            _hover={{ backgroundColor: "#000A27" }}
            fontSize="1.9rem"
            margin="2rem auto"
            padding="2rem 3rem"
            maxWidth="20rem"
            border={"2px solid"}
            backgroundColor="black">
            Who I'am
          </Button>
          <HStack flexWrap="wrap" justifyContent="space-between" gap={"10em"}>
            <Box width="20em" margin="0 auto">
              <Avatar size="3xl" src={photo}></Avatar>
            </Box>
            <VStack gap={"1.2em"} width="30em">
              <Heading>I'm Mohamed Safouen Ennaguez</Heading>
              <Text>
                Professionally connected with the web development industry and
                information technology for many years.Well-organised person,
                problem solver, independent employee with high attention to
                details
              </Text>
              <Text>
                <strong size="10rem">Email:</strong>mohamedsafouen@gmail.com
              </Text>
              <Text>Phone:+21655339338</Text>
              <Text>Experience : +2 Years</Text>
              <HStack spacing={5}>
                {socials.map((social, index) => {
                  return (
                    <SocialIcon
                      key={index}
                      bgColor="white"
                      url={social.url}
                      target="_blank"
                    />
                  );
                })}
              </HStack>
            </VStack>
          </HStack>
        </VStack>
        <Box margin="5em">
          <Button
            _hover={{ backgroundColor: "#000A27" }}
            fontSize="2rem"
            margin="2rem auto"
            padding="2rem 4.9rem"
            maxWidth="20rem"
            border={"2px solid"}
            backgroundColor="black">
            Skills
          </Button>
          <Box
            display="grid"
            gridTemplateColumns="50% 50%"
            gridGap="2em"
            margin="2em 0">
            {Skills.map((skill, index) => {
              return (
                <div key={index} style={{ maxHeight: "12em" }}>
                  <Text textAlign="left">{skill.name}</Text>
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
    </Box>
  );
};
export default About;
