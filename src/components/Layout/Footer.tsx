import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const PageFooter = () => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={"auto"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link href="https://swapi.dev/" target="_blank" rel="noopener">
          Made using Swapi
        </Link>
        <Link
          href="https://github.com/diegochappedelaine"
          target="_blank"
          rel="noopener"
        >
          @diegochappedelaine
        </Link>
      </Container>
    </Box>
  );
};

export default PageFooter;
