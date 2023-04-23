import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Code,
  VStack,
} from "@chakra-ui/react";

export const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <Code as={"b"} fontSize={"lg"} children="Experience" />
      </CardHeader>

      <CardBody>
        <VStack spacing={4} align="stretch">
          <Code colorScheme="red" children="Smokeless.World GmbH" />
          <Code
            colorScheme="red"
            children="Working Student React-Native Developer"
          />
          <StackDivider />
          <Code colorScheme="blue" children="CGI" />
          <Code colorScheme="blue" children="Project Seminar" />
          <StackDivider />

          <Code colorScheme="purple" children="ORDA Technologies GmbH" />
          <Code
            colorScheme="purple"
            children=" Working Student Fullstack Developer"
          />

          <StackDivider />

          <Code children="ShopVibes" />
          <Code children="Project Student(IDP) React Developer" />
        </VStack>
      </CardBody>
    </Card>
  );
};
