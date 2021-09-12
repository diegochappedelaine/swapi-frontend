import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Link to="https://swapi.dev/">Swapi</Link>
        <Link to="https://github.com/diegochappedelaine">
          @diegochappedelaine
        </Link>
      </Container>
    </Box>
  );
};

export default PageFooter;
