import { Heading, Flex } from "@chakra-ui/react";

type ListPageLayoutProps = {
  title: string;
};

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ title, children }) => {
  return (
    <Flex flexDir={"column"}>
      <Heading mt={4} mb={16} as="h1" textAlign="center">
        {title}
      </Heading>
      {children}
    </Flex>
  );
};

export default ListPageLayout;
