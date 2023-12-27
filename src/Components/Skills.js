import {
  Text,
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import {
  SiHtml5,
  SiReact,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiWordpress,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./../Hooks/progress";

import "./../App.css";
export const socials = [
  { url: "https://www.linkedin.com/in/med-safouen/" },
  { url: "https://twitter.com/mohamed_safouen" },
  { url: "https://github.com/mohamed-safouen" },
  { url: "https://stackoverflow.com/users/19407251/mohamed-safouen-naguez" },
];
const Skills = [
  { name: <SiHtml5 size={"3rem"} />, text: "HTML5", value: 90 },
  { name: <SiCss3 size={"3rem"} />, text: "CSS3", value: 90 },
  { name: <SiReact size={"3rem"} />, text: "ReactJs", value: 65 },
  { name: <SiJavascript size={"3rem"} />, text: "JavaScript", value: 70 },
  { name: <SiBootstrap size={"3rem"} />, text: "Bootstrap", value: 80 },
  { name: <SiWordpress size={"3rem"} />, text: "WordPress", value: 85 },
  { name: <AiOutlineConsoleSql size={"3rem"} />, text: "SQL", value: 28 },
  { name: <SiNextdotjs size={"3rem"} />, text: "NextJs", value: 40 },
  { name: <SiVuedotjs size={"3rem"} />, text: "VueJs", value: 30 },
];
const SkillsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box  width={"100%"} backgroundColor={"#f5f5f8"} padding="5rem 0">
      <Box
        margin="6rem auto"
        id="Skills"
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
        <Box
          id="bars"
          display="grid"
          gridTemplateColumns={{ base: "100%", lg: "50% 50%" }}
          gridGap="2em"
          margin="2em 0">
          {Skills.sort((a, b) => b.value - a.value).map((skill, index) => {
            return (
              <div key={index} style={{ maxHeight: "12em" }}>
                <HStack gap={"2"} alignItems={"flex-start"}>
                  <Box marginBottom={"1rem"}>{skill.name}</Box>
                  <Text fontSize={"1.8rem"} fontWeight={"500"}>
                    {skill.text}
                  </Text>
                </HStack>
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
export default SkillsSection;
