import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Industrie40 = () => {
  return (
    <Flex
      as="section"
      direction="column"
      padding={{ base: "unset", md: 10 }}
      justify="center"
      align="center"
    >
      <Box
        w="100%"
        textAlign="center"
        padding={{ base: "0 1rem", md: "0 20%" }}
      >
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
      <Flex
        justify="center"
        align="center"
        marginTop={10}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          h={{ base: "300px", md: "80vw" }}
          maxH="600px"
          position="relative"
        >
          <Image
            src="https://imgix.tractian.com/lp-software/gestao-de-ativos-status-completo.png?auto=format&fit=max&w=3840"
            alt="Tablet dashboard example"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          h="100%"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={{ md: 5 }}>
            Gestão de Ativos e Alarmes
          </Text>
          <Text as="p" fontSize={{ md: "2xl" }}>
            Através da Visão Geral você acompanha todos os pontos de
            monitoramento e visualiza os últimos acontecimentos.
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify="center"
        align="center"
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          h={{ base: "300px", md: "80vw" }}
          maxH="600px"
          position="relative"
        >
          <Image
            src="https://imgix.tractian.com/lp-software/sensor-telas-plataforma-mobile.png?auto=format&fit=max&w=3840"
            alt="Insights"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          h="100%"
          textAlign={{ base: "center", md: "right" }}
        >
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={{ md: 5 }}>
            Insights automáticos
          </Text>
          <Text as="p" fontSize={{ md: "2xl" }}>
            A plataforma aprende como funciona cada ponto de monitoramento e te
            avisa quando algo não está certo.
          </Text>
        </Box>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "90%" }}
          h={{ base: "300px", md: "80vw" }}
          maxH="600px"
          position="relative"
        >
          <Image
            src="https://imgix.tractian.com/lp-software/status-completo.png?auto=format&fit=max&w=3840"
            alt="Notebook status example"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          h="100%"
          marginLeft={{ md: "-100px" }}
          marginBottom="40px"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={{ md: 5 }}>
            Status completo
          </Text>
          <Text as="p" fontSize={{ md: "2xl" }}>
            Tenha controle de tudo o que acontece com as suas máquinas e
            gerencie suas rotinas de manutenção.
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify="center"
        align="center"
        marginBottom={{ base: "2rem", md: "unset" }}
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          h={{ base: "300px", md: "80vw" }}
          maxH="600px"
          position="relative"
        >
          <Image
            src="https://imgix.tractian.com/lp-software/usuarios-ilimitados-2.png?auto=format&fit=max&w=1080"
            alt="Users"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          h="100%"
          textAlign={{ base: "center", md: "right" }}
        >
          <Text as="h3" fontWeight={600} fontSize="3xl" paddingY={{ md: 5 }}>
            Usuários ilimitados
          </Text>
          <Text as="p" fontSize={{ md: "2xl" }}>
            Centralize a rotina do seu time e escale atividades de cada
            colaborador através das ordens de serviço.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
