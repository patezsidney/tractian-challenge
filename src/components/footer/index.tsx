import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(to-br, primary.500, primary.400)"
      color="white"
      padding={10}
    >
      <Flex
        justify={{ base: "center", md: "space-between" }}
        align="center"
        padding="2rem"
      >
        <Box display={{ base: "none", md: "inherit" }}>
          <Image
            src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=640"
            alt="Logo Tractian"
            width={200}
            height={40}
          />
        </Box>
        <Link color="primary.100">Voltar ao topo</Link>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        padding="2rem"
        borderTop="1px"
        borderColor="rgb(96 165 250)"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          textAlign="center"
          color="rgb(191 219 254)"
          fontSize="xs"
          _hover={{ color: "white" }}
        >
          <Box display={{ md: "none" }}>
            <Image
              src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=640"
              alt="Logo Tractian"
              width={200}
              height={40}
            />
          </Box>
          <Text fontWeight="bold">© Tractian Tecnologia Ltda</Text>
          <Text>CNPJ: 35.755.699/0001-84</Text>
        </Box>
        <Flex flex="1" justify="center">
          <Box margin="1rem" cursor="pointer">
            <Image
              src="https://imgix.tractian.com/images/linkedin.png?auto=format&fit=max&w=64"
              alt="Linkedin"
              width="30px"
              height="30px"
              objectFit="contain"
            />
          </Box>
          <Box margin="1rem" cursor="pointer">
            <Image
              src="https://imgix.tractian.com/images/facebook.png?auto=format&fit=max&w=64"
              alt="Facebook"
              width="30px"
              height="30px"
              objectFit="contain"
            />
          </Box>
          <Box margin="1rem" cursor="pointer">
            <Image
              src="https://imgix.tractian.com/images/instagram.png?auto=format&fit=max&w=64"
              alt="Instagram"
              width="30px"
              height="30px"
              objectFit="contain"
            />
          </Box>
          <Box margin="1rem" cursor="pointer">
            <Image
              src="https://imgix.tractian.com/images/youtube.png?auto=format&fit=max&w=64"
              alt="Youtube"
              width="30px"
              height="30px"
              objectFit="contain"
            />
          </Box>
        </Flex>

        <Box
          textAlign="center"
          color="rgb(191 219 254)"
          fontSize="xs"
          fontWeight="bolder"
          _hover={{ color: "white" }}
          cursor="pointer"
        >
          <Text>Política de privacidade</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
