import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Code,
  VStack,
} from "@chakra-ui/react";

export const Education = () => {
  return (
    <Card height={"220"}>
      <CardHeader>
        <Code as={"b"} fontSize={"lg"} children="Education" />
      </CardHeader>

      <CardBody>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Code children="BSc. Computer Science Pamukkale University | 2014 - 2019" />
          <Code
            colorScheme="red"
            children=" MSc. Informatics Technical University of Munich | 2020 - 2023"
          />
        </VStack>
      </CardBody>
    </Card>
  );
};
