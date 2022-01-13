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

export const HeaderForm = () => {
  return (
    <Box w="100%" color="white">
      <VStack h="100%" spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input id="name" placeholder="Insira seu nome" bgColor="white" />
          <FormErrorMessage>*Campo obrigatório</FormErrorMessage>
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
        <FormControl>
          <FormLabel htmlFor="cargo">Cargo</FormLabel>
          <Input id="cargo" placeholder="Insira seu cargo" bgColor="white" />
          <FormErrorMessage>*Insira corretamente</FormErrorMessage>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Quantidade de pontos monitorados</FormLabel>
          <RadioGroup>
            <HStack justify="space-between">
              <Radio value="10 a 20">10 a 20</Radio>
              <Radio value="21 a 30">21 a 30</Radio>
              <Radio value="31 a 50">31 a 50</Radio>
              <Radio value="Mais de 50">Mais de 50</Radio>
            </HStack>
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
          Solicitar demonstração
        </Button>
      </VStack>
    </Box>
  );
};
