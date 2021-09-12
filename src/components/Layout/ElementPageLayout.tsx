import { Heading, Flex } from "@chakra-ui/react";

type ElementPageLayoutProps = {
  title: string;
};

const ElementPageLayout: React.FC<ElementPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Flex flexDir={"column"} mb={32}>
      <Heading mt={4} mb={8} as="h1" textAlign="center">
        {title}
      </Heading>
      {children}
    </Flex>
  );
};

export default ElementPageLayout;
