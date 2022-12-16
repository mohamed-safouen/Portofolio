import { Heading, VStack, Box, IconButton, } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState,useEffect } from "react";
import cofee from "./../images/cofee.jpg"
const title ="I'm Front End Developer"
               
const Landing = () => {
  const [type,setType]=useState("")
  useEffect(() => {
    setTimeout(()=>{
      setType(title.slice(0, type.length + 1));
    },200)
 if (type === title) {
 setTimeout(() => {
   setType("");
 },2000);
 }
  }, [type])
  
  return (
    <Box
      backgroundImage={cofee}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justifyContent="center"
      alignItems="center"
      padding="10em 3em"
      height={"50em"}>
      <VStack
        textAlign="center"
        margin="0 auto"
        padding="1.5em 4em"
        color="#F2F2F2"
        fontSize="3.8em">
        <Heading height={"5em"} margin="-2rem" as="h1" size="md">
          {type}
        </Heading>
        <Heading as="h1" size="3xl">
          Mohamed Safouen Ennaguez
        </Heading>
        <IconButton
          transform="rotate(90deg)"
          colorScheme="white"
          aria-label="Call Sage"
          fontSize="5rem"
          icon={<ArrowRightIcon marginLeft={"10rem"} />}></IconButton>
      </VStack>
    </Box>
  );
};
export default Landing;
