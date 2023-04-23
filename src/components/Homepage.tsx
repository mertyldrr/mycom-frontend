import { Center, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Education } from "./Education";
import { Experience } from "./Experience";

const Homepage = () => {
  return (
    <Center>
      <Flex
        flexDirection="column"
        minWidth="max-content"
        alignItems="center"
        justifyContent="center"
        width={"80%"}
        borderWidth="1px"
        borderRadius="lg"
        bg="purple.700"
      >
        <Navbar />
        <Flex w={"100%"} justifyContent={"space-around"}>
          <Education />
          <Experience />
        </Flex>
      </Flex>
    </Center>
  );
};

export default Homepage;
