import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const SoftwareHardwareUnion = () => {
  return (
    <Flex
      direction="column"
      as="section"
      padding={10}
      paddingBottom="unset"
      justify="center"
      alignItems="center"
      bgGradient="linear(to-r, primary.500, primary.200)"
      color="white"
      textAlign="center"
    >
      <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
        A união perfeita de software e hardware em um só lugar
      </Text>
      <Text as="p">
        Gestão de ativos, Ordens de Serviço automatizadas e Insights automáticos
        na mesma plataforma.
      </Text>
      <Flex
        w="100%"
        justify="space-around"
        textAlign="center"
        paddingTop="60px"
        direction={{ base: "column", md: "row" }}
      >
        <Box w="320px" marginBottom={{ base: "2rem", md: "none" }}>
          <Flex
            bgColor="white"
            padding=".5rem 2rem"
            borderRadius={10}
            border="4px"
            borderColor="rgb(96 165 250)"
            w="100%"
            justify="center"
          >
            <Image
              src="https://imgix.tractian.com/lp-software/down-arrow.png?auto=format&fit=max&w=128"
              alt="arrow down"
              width="60px"
              height="60px"
              objectFit="contain"
            />
            <Text as="p" fontSize="6xl" fontWeight="bold" color="primary.200">
              60%
            </Text>
          </Flex>
          <Text>
            Reduza em até <strong>60%</strong> o custo de manutenção
          </Text>
        </Box>
        <Box w="320px" marginBottom={{ base: "2rem", md: "none" }}>
          <Flex
            bgColor="white"
            padding=".5rem 2rem"
            borderRadius={10}
            border="4px"
            borderColor="rgb(96 165 250)"
            w="100%"
            justify="center"
          >
            <Image
              src="https://imgix.tractian.com/lp-software/up-arrow.png?auto=format&fit=max&w=128"
              alt="arrow down"
              width="60px"
              height="60px"
              objectFit="contain"
            />
            <Text as="p" fontSize="6xl" fontWeight="bold" color="primary.200">
              50%
            </Text>
          </Flex>
          <Text>
            Aumente em até <strong>50%</strong> o uptime da sua máquina
          </Text>
        </Box>
        <Box w="320px">
          <Flex
            bgColor="white"
            padding=".5rem 2rem"
            borderRadius={10}
            border="4px"
            borderColor="rgb(96 165 250)"
            w="100%"
            justify="center"
          >
            <Image
              src="https://imgix.tractian.com/lp-software/down-arrow.png?auto=format&fit=max&w=128"
              alt="arrow down"
              width="60px"
              height="60px"
              objectFit="contain"
            />
            <Text as="p" fontSize="6xl" fontWeight="bold" color="primary.200">
              55%
            </Text>
          </Flex>
          <Text>
            Reduza em até <strong>55%</strong> o número de quebras inesperadas
          </Text>
        </Box>
      </Flex>
      <Box
        position="relative"
        w="100%"
        h={{ base: "300px", md: "100vw" }}
        maxH="600px"
      >
        <Image
          src="https://imgix.tractian.com/lp-software/uniao-software-hardware-manutencao.png?auto=format&fit=max&w=3840"
          alt="Alert example"
          objectFit="contain"
          layout="fill"
        />
      </Box>
    </Flex>
  );
};
