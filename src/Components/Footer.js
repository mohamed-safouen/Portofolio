import { SocialIcon } from "react-social-icons";
import { socials } from "./Data";
import { Text, Box, HStack,Container } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Box backgroundColor="#000000">
        <Container
          as={HStack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}>
          <Text>© 2022 Mohamed Safouen Ennaguez. All rights reserved</Text>
          <HStack spacing={6}>
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
        </Container>
      </Box>
    </>
  );
};
export default Footer;
