import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,Box,Heading,Textarea,Button,
} from "@chakra-ui/react";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import ScrollToTop from "react-scroll-to-top";


const Contact = () => {
const [input, setInput] = useState({
  name:"",
  email:"",
  message:""
})

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <Box backgroundColor={"#f5f5f8"} margin="5rem auto" padding={"5rem 0"}>
      <Box spacing={8}>
        <VStack width="80%" margin="0 auto">
          <Box
            id="Contact"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            width="20rem"
            margin={"3em auto"}
            gap="3">
            <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
            <Heading fontSize="3rem" maxWidth="20rem" color={"#151f3b"}>
              Contact
            </Heading>
            <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
          </Box>
          <Box
            display="flex"
            width="100%"
            gap="2%"
            justifyContent="center"
            flexWrap="wrap"
            paddingBottom={"5rem "}>
            <Button
              size="md"
              width="18rem"
              height="48px"
              variant="ghost"
              color="#151f3b"
              _hover={{ border: "2px solid #151f3b" }}
              leftIcon={<HiPhone color="#151f3b" size="2em" />}>
              +216 55 339 338
            </Button>
            <Button
              size="md"
              width="18rem"
              height="48px"
              variant="ghost"
              color="#151f3b"
              _hover={{ border: "2px solid #151f3b" }}
              leftIcon={<HiOutlineMail color="#151f3b" size="2em" />}>
              mohamedsafouen@gmail.com
            </Button>
            <Button
              size="md"
              width="18rem"
              height="48px"
              variant="ghost"
              color="#151f3b"
              _hover={{ border: "2px solid #151f3b" }}
              leftIcon={<HiLocationMarker color="#151f3b" size="2em" />}>
              Sousse, Tunisia
            </Button>
          </Box>
          <Box margin="" rounded="md" w="100%">
            <form onSubmit={handleOnSubmit}>
              <VStack textAlign="start" spacing={4}>
                <Box
                  display={"flex"}
                  justifyContent="space-around"
                  width="100%"
                  gap={"0.5em"}
                  flexWrap={"wrap"}
                  margin={"0 auto"}>
                  <Box width={"35rem"}>
                    <FormControl isRequired isInvalid={isError}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        id="firstName"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                      {!isError ? (
                        <FormHelperText>Enter Your name.</FormHelperText>
                      ) : (
                        <FormErrorMessage>Name is required.</FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                  <Box width={"35rem"}>
                    <FormControl isRequired isInvalid={isError}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={input.email}
                        onChange={handleInputChange}
                      />
                      {!isError ? (
                        <FormHelperText>Enter Your email.</FormHelperText>
                      ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                </Box>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor="message">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="message"
                    onChange={handleInputChange}
                    value={input.message}
                    height={250}
                  />
                  {!isError ? (
                    <FormHelperText>Enter Your Message</FormHelperText>
                  ) : (
                    <FormErrorMessage>Message is required.</FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  variant="outline"
                  width="full"
                  color="White"
                  backgroundColor={"#151f3b"}
                  _hover={{
                    bg: "white",
                    color: "black",
                    border: "black solid 1px",
                  }}
                  _active={{
                    bg: "#151f3b",
                    transform: "scale(0.98)",
                    borderColor: "#151f3b",
                  }}>
                  Send
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
      <ScrollToTop smooth/>
    </Box>
  );
};
export default Contact;
