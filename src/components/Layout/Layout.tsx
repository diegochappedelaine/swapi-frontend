import Footer from "./Footer";
import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import { Container } from "components";
import { Flex } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex minHeight={"100vh"} direction="column">
      <NavBar />
      <HeroBanner />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  );
};

export default Layout;
