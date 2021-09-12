import { Container } from "components";
import {
  Stack,
  Heading,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Destroyer } from "assets";

const HeroBanner = () => {
  return (
    <Stack background={useColorModeValue("gray.900", "black")}>
      <Container>
        <Stack direction={"row"} align={"center"}>
          <Stack flex={{ sm: "0.7", base: "1" }}>
            <Heading color="white" py={40} textAlign="center">
              Browse Rebel's <br />
              secret DB
            </Heading>
          </Stack>
          <Box flex="1" display={{ base: "none", sm: "flex" }}>
            <Image src={Destroyer} alt="Imperial Star Destroyer" />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HeroBanner;
