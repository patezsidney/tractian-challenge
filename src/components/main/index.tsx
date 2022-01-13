import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import ReactPlayer from "react-player";

export const Main = () => {
  return (
    <Box as="main" fontWeight={400} fontSize="xl">
      <Box as="section" marginTop="-1px" textAlign="center">
        <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
          Indústrias inteligentes usam
        </Text>
        <Text as="p">Trazemos paz para a manutenção.</Text>
        <Text as="p">
          Controle, autonomia e confiabilidade para sua máquina.
        </Text>
        <Flex>
          <Box position="relative" w="60%" h="80vh">
            <Image
              src="https://imgix.tractian.com/lp-software/insights-tela-desalinhamento.png?auto=format&fit=max&w=3840"
              alt="Dashboard example"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <VStack alignItems="flex-start" justify="center" spacing={5}>
            <Flex alignItems="center">
              <Image
                src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                alt="check"
                width={48}
                height={48}
              />
              <Text as="p">Saúde dos ativos</Text>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                alt="check"
                width={48}
                height={48}
              />
              <Text as="p">Monitoramento constante</Text>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                alt="check"
                width={48}
                height={48}
              />
              <Text as="p">Analytics</Text>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                alt="check"
                width={48}
                height={48}
              />
              <Text as="p">OS automatizados</Text>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                alt="check"
                width={48}
                height={48}
              />
              <Text as="p">Alertas automáticos</Text>
            </Flex>
          </VStack>
        </Flex>
      </Box>
      <Flex
        direction="column"
        as="section"
        padding={10}
        justify="center"
        alignItems="center"
        bgColor="gray.100"
      >
        <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
          Case de Sucesso: AmstedMaxion e TRACTIAN
        </Text>
        <Text as="p" maxW="900px" textAlign="center">
          A AmstedMaxion é a maior fabricante de fundidos ferroviários e
          industriais da América do Sul! E está usufruindo do monitoramento
          online de ativos TRACTIAN.
        </Text>
        <Box marginY={10}>
          <ReactPlayer url="https://www.youtube.com/watch?list=TLGG_LEqdyL0xEgxMzAxMjAyMg&v=JIdKPsDjIaY" />
        </Box>
      </Flex>
    </Box>
  );
};
