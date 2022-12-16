import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,HStack,Box,Heading,Textarea,Button,
} from "@chakra-ui/react";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";


const Contact = () => {
const [input, setInput] = useState({
  name:"",
  email:"",
  message:""
})

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  const SERVICE_ID = "service_0vel98n";
  const TEMPLATE_ID = "template_hb8ep1a";
  const USER_ID = "8_6b2eoaz76zVV9eU";
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
    <Box backgroundColor="#000A27">
      <Box py={2} spacing={8}>
        <VStack w="100%" p={32} margin="0 auto">
          <Button
            _hover={{ backgroundColor: "#000A27" }}
            fontSize="2rem"
            margin="2rem auto"
            padding="2rem 4.9rem"
            maxWidth="20rem"
            border={"2px solid"}
            backgroundColor="black">
            Contact me
          </Button>
          <Box
            display="flex"
            width="90%"
            margin="0 auto"
            gap="10"
            justifyContent="center"
            flexWrap="wrap">
            <Button
              size="lg"
              height="48px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid white" }}
              leftIcon={<HiPhone color="white" size="2em" />}>
              +216 55 339 338
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid white" }}
              leftIcon={<HiOutlineMail color="white" size="2em" />}>
              mohamedsafouen@gmail.com
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid white" }}
              leftIcon={<HiLocationMarker color="white" size="2em" />}>
              Sousse, Tunisia
            </Button>
          </Box>
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={handleOnSubmit}>
              <VStack textAlign="start" spacing={4}>
                <Box
                  display="flex"
                  flexDirection={"row"}
                  width="100%"
                  margin="0 auto"
                  gap="5"
                  justifyContent="center">
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
                  _hover={{ bg: "#ebedf0", color: "black" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}>
                  Send
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
export default Contact;
