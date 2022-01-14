import { Flex, Text } from "@chakra-ui/react";
import { FooterForm } from "../../footerForm";

export const ContactForm = () => {
  return (
    <Flex
      direction="column"
      as="section"
      padding={10}
      justify="center"
      alignItems="center"
      bgGradient="linear(to-r, primary.500, primary.200)"
      color="white"
    >
      <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
        Pronto para deixar de lado as planilhas e ter dados que funcionam para
        você?
      </Text>
      <FooterForm />
    </Flex>
  );
};
