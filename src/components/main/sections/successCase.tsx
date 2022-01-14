import { Box, Flex, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const SuccessCase = () => {
  return (
    <Flex
      direction="column"
      as="section"
      padding={10}
      justify="center"
      alignItems="center"
      bgColor="gray.100"
    >
      <Text
        as="h2"
        fontWeight={600}
        fontSize="3xl"
        paddingY={5}
        textAlign="center"
      >
        Case de Sucesso: AmstedMaxion e TRACTIAN
      </Text>
      <Text as="p" maxW="900px" textAlign="center">
        A AmstedMaxion é a maior fabricante de fundidos ferroviários e
        industriais da América do Sul! E está usufruindo do monitoramento online
        de ativos TRACTIAN.
      </Text>
      <Box marginY={10} w={{ base: "90vw", md: "600px" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?list=TLGG_LEqdyL0xEgxMzAxMjAyMg&v=JIdKPsDjIaY"
          width="100%"
        />
      </Box>
    </Flex>
  );
};
