import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";

export const SmartIndustries = () => {
  return (
    <Box as="section" marginTop="-1px" textAlign="center">
      <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
        Indústrias inteligentes usam
      </Text>
      <Text as="p">Trazemos paz para a manutenção.</Text>
      <Text as="p">Controle, autonomia e confiabilidade para sua máquina.</Text>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          position="relative"
          w={{ base: "100%", md: "60%" }}
          h={{ base: "300px", md: "80vh" }}
        >
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
  );
};
