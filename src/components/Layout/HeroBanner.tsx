import { Container } from "components";
import { Stack, Heading, Image, Box } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Stack background={"black"}>
      <Container>
        <Stack direction={"row"} align={"center"}>
          <Stack flex={{ md: "0.7", base: "1" }}>
            <Heading color="white" py={40} textAlign="center">
              Browse Rebel's <br />
              secret DB
            </Heading>
          </Stack>
          <Box flex="1" display={{ base: "none", md: "flex" }}>
            <Image
              src="https://images3.alphacoders.com/115/thumb-1920-115035.jpg"
              alt="Imperial Star Destroyer"
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HeroBanner;
