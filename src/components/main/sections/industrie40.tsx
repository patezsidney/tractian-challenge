import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Industrie40 = () => {
  return (
    <Flex
      as="section"
      direction="column"
      padding={10}
      justify="center"
      align="center"
    >
      <Box w="100%" textAlign="center" padding="0 20%">
        <Text as="h2" fontWeight={600} fontSize="3xl" paddingY={5}>
          Para além do nome Indústria 4.0
        </Text>
        <Text as="p">
          Conheça a Gestão de Ativos 4.0 que realmente funciona. Desfrute da
          fusão perfeita e simplificada de ferramentas de hardware-software de
          que precisa para chegar na manutenção classe mundial.
        </Text>
        <Button
          marginTop={10}
          bgColor="secondary.400"
          color="white"
          _hover={{ bg: "secondary.200" }}
          _active={{ bg: "secondary.200" }}
          _focus={{ boxShadow: "none" }}
        >
          Agende uma demonstração
        </Button>
      </Box>
      <Flex justify="center" align="center" marginTop={10}>
        <Box w="60%" h="80vw" maxH="600px" position="relative">
          <Image
            src="https://imgix.tractian.com/lp-software/gestao-de-ativos-status-completo.png?auto=format&fit=max&w=3840"
            alt="Tablet dashboard example"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box w="40%" h="100%">
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={5}>
            Gestão de Ativos e Alarmes
          </Text>
          <Text as="p" fontSize="2xl">
            Através da Visão Geral você acompanha todos os pontos de
            monitoramento e visualiza os últimos acontecimentos.
          </Text>
        </Box>
      </Flex>
      <Flex direction="row-reverse" justify="center" align="center">
        <Box w="60%" h="80vw" maxH="600px" position="relative">
          <Image
            src="https://imgix.tractian.com/lp-software/sensor-telas-plataforma-mobile.png?auto=format&fit=max&w=3840"
            alt="Insights"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box w="40%" h="100%" textAlign="right">
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={5}>
            Insights automáticos
          </Text>
          <Text as="p" fontSize="2xl">
            A plataforma aprende como funciona cada ponto de monitoramento e te
            avisa quando algo não está certo.
          </Text>
        </Box>
      </Flex>
      <Flex justify="center" align="center">
        <Box w="90%" h="80vw" maxH="600px" position="relative">
          <Image
            src="https://imgix.tractian.com/lp-software/status-completo.png?auto=format&fit=max&w=3840"
            alt="Notebook status example"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box w="40%" h="100%" marginLeft="-100px" marginBottom="40px">
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={5}>
            Status completo
          </Text>
          <Text as="p" fontSize="2xl">
            Tenha controle de tudo o que acontece com as suas máquinas e
            gerencie suas rotinas de manutenção.
          </Text>
        </Box>
      </Flex>
      <Flex direction="row-reverse" justify="center" align="center">
        <Box w="60%" h="80vw" maxH="600px" position="relative">
          <Image
            src="https://imgix.tractian.com/lp-software/usuarios-ilimitados-2.png?auto=format&fit=max&w=1080"
            alt="Users"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box w="40%" h="100%" textAlign="right">
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={5}>
            Usuários ilimitados
          </Text>
          <Text as="p" fontSize="2xl">
            Centralize a rotina do seu time e escale atividades de cada
            colaborador através das ordens de serviço.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
