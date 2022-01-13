import Image from "next/image";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { HeaderForm } from "../headerForm";

export const Header = () => {
  return (
    <Flex
      as="header"
      bgGradient="linear(to-r, primary.500, primary.200)"
      flexDirection="column"
      w="100vw"
      paddingTop={8}
    >
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Box w="35%">
          <Image
            src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=640"
            alt="Logo Tractian"
            width={200}
            height={40}
          />
          <Text
            as="h1"
            casing="uppercase"
            fontWeight={600}
            fontSize="2xl"
            color="white"
            marginY={5}
          >
            A plataforma mais completa do mercado
          </Text>
          <Text as="p" color="white" marginY={5}>
            Com o Software de Manutenção da TRACTIAN você está um passo à frente
            da falha.É mais visibilidade, segurança e controle de forma simples
            e inteligente, como deve ser.
          </Text>
          <HeaderForm />
        </Box>
        <Box w="50%" h="80vh" position="relative">
          <Image
            src="https://imgix.tractian.com/lp-software/sensor-plataforma-celular-tablet.png?auto=format&fit=max&w=1080"
            alt="Demo gestão de ativos"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Flex>
      <Flex w="100%" h={180} position="relative">
        <Image
          src="https://imgix.tractian.com/images/ondas.svg"
          alt="Logo Tractian"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Flex>
    </Flex>
  );
};
