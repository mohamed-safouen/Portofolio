import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast,ToastContainer } from "react-toastify";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,Box,Heading,Textarea,Button,
} from "@chakra-ui/react";
import { HiArrowUp } from "react-icons/hi";
import {
  Container,
  Flex,
  Link,
  IconButton,
  HStack,
  Wrap,
  WrapItem,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson,BsTwitter } from "react-icons/bs";
import "./../style.css"

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
       toast.success("⭐Thank you for getting in touch!⭐", {
         position: "bottom-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       });
      }, (error) => {
       toast.error("Oups!", {
         position: "bottom-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       });
      });
    e.target.reset()
  };

  return (
    <Container
      bg="#f5f5f8"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      padding={"0 3.5rem"}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Flex>
        <Box
          bg="#151f3b"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4} id="Contact">
            <Wrap
              spacing={{ base: 15, sm: 3, md: 5, lg: 20 }}
              alignItems={"center"}>
              <WrapItem>
                <Box>
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    width="20rem"
                    margin={"0 auto"}
                    gap="3">
                    <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
                    <Heading fontSize="3rem" maxWidth="20rem">
                      Contact
                    </Heading>
                    <Box borderTop={"2px solid #c7c7d9"} width="3rem" />
                  </Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +216-55339338
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        mohamedsafouen@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Sousse, Tunisia
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    justifyContent="center">
                    <Link
                      href="https://www.linkedin.com/in/med-safouen/"
                      isExternal>
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>
                    <Link href="https://github.com/mohamed-safouen" isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>
                    <Link href="https://twitter.com/mohamed_safouen" isExternal>
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsTwitter size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={handleOnSubmit}>
                      <VStack spacing={5}>
                        <FormControl isRequired isInvalid={isError}>
                          <FormLabel htmlFor="name">Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              id="firstName"
                              name="name"
                              value={input.name}
                              onChange={handleInputChange}
                            />
                            {!isError ? (
                              ""
                            ) : (
                              <FormErrorMessage>
                                Name is required.
                              </FormErrorMessage>
                            )}
                          </InputGroup>
                        </FormControl>
                        <FormControl isRequired isInvalid={isError}>
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={input.email}
                              onChange={handleInputChange}
                            />
                            {!isError ? (
                              ""
                            ) : (
                              <FormErrorMessage>
                                Email is required.
                              </FormErrorMessage>
                            )}
                          </InputGroup>
                        </FormControl>
                        <FormControl isInvalid={isError}>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            id="comment"
                            name="message"
                            onChange={handleInputChange}
                            value={input.message}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                          {!isError ? (
                            ""
                          ) : (
                            <FormErrorMessage>
                              Message is required.
                            </FormErrorMessage>
                          )}
                        </FormControl>
                        <FormControl float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="#151f3b"
                            color="white"
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
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <div
        className="Arrow"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}>
        <HiArrowUp size={"3rem"} />
      </div>
    </Container>
  );
};
export default Contact;
