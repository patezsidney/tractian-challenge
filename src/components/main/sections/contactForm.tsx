import { Flex, Text } from "@chakra-ui/react";
import { FooterForm } from "../../footerForm";

export const ContactForm = () => {
  return (
    <Flex
      direction="column"
      as="section"
      padding={{ base: "2rem 1rem", md: 10 }}
      justify="center"
      alignItems="center"
      bgGradient="linear(to-r, primary.500, primary.200)"
      color="white"
    >
      <Text
        as="h2"
        fontWeight={600}
        fontSize={{ base: "2xl", md: "3xl" }}
        paddingY={5}
        textAlign="center"
      >
        Pronto para deixar de lado as planilhas e ter dados que funcionam para
        você?
      </Text>
      <FooterForm />
    </Flex>
  );
};
