import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";

export const FooterForm = () => {
  return (
    <Box
      w="100%"
      color="white"
      bgGradient="linear(to-r, primary.500, primary.200)"
      maxW="600px"
      margin="3rem auto"
      padding="1rem"
      borderRadius={10}
    >
      <VStack h="100%" spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input id="name" placeholder="Insira seu nome" bgColor="white" />
          <FormErrorMessage>*Campo obrigatório</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cargo">Cargo</FormLabel>
          <Input id="cargo" placeholder="Insira seu cargo" bgColor="white" />
          <FormErrorMessage>*Insira corretamente</FormErrorMessage>
        </FormControl>
        <Flex justifyContent="space-between" w="100%">
          <FormControl flex={1} marginRight={5}>
            <FormLabel htmlFor="email">E-mail profissional</FormLabel>
            <Input
              id="email"
              placeholder="Insira seu email proficional"
              type="email"
              bgColor="white"
            />
            <FormErrorMessage>*Insira seu email coorporativo</FormErrorMessage>
          </FormControl>
          <FormControl w="fit-content">
            <FormLabel htmlFor="phone">Telefone</FormLabel>
            <Input
              id="phone"
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              bgColor="white"
              w="fit-content"
            />
            <FormErrorMessage>*Insira corretamente</FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl as="fieldset">
          <FormLabel as="legend">
            O que mais te interessou nas nossas soluções?
          </FormLabel>
          <RadioGroup>
            <VStack justify="space-between" align="flex-start">
              <Radio value="Monitoramento">
                Monitoramento Online e Sensores
              </Radio>
              <Radio value="Software">
                Software de Gestão da Manutenção e PCM
              </Radio>
              <Radio value="Todos">Todas as Soluções</Radio>
            </VStack>
          </RadioGroup>
          <FormErrorMessage>*Campo obrigatório</FormErrorMessage>
        </FormControl>
        <Button
          bgColor="secondary.400"
          color="white"
          isFullWidth
          _hover={{ bg: "secondary.200" }}
          _active={{ bg: "secondary.200" }}
          _focus={{ boxShadow: "none" }}
        >
          Enviar
        </Button>
      </VStack>
    </Box>
  );
};
