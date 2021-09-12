import { Container as ContainerWrapper } from "@chakra-ui/react";

const Container: React.FC = ({ children }) => {
  return <ContainerWrapper maxW="container.xl">{children}</ContainerWrapper>;
};

export default Container;
