import { Link, ListItem, useColorModeValue, Box } from "@chakra-ui/react";
import { Link as RooterLink } from "react-router-dom";
import { SwapiRessources } from "types";
import { DataTypeIcon } from "components";

type SearchResultElementProps = {
  element: {
    name?: string;
    title?: string;
  };
  url: string;
  dataType: SwapiRessources;
};

const SearchResultElement: React.FC<SearchResultElementProps> = ({
  element,
  url,
  dataType,
}) => {
  return (
    <ListItem>
      <Link
        as={RooterLink}
        to={url}
        rounded={"lg"}
        mb={4}
        mx={"auto"}
        p={4}
        maxW={"4xl"}
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        bg={useColorModeValue("gray.200", "gray.700")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.300", "gray.500"),
        }}
      >
        <Box as="span" mr={4} fontSize="lg">
          <DataTypeIcon dataType={dataType} />
        </Box>

        {element?.name || element?.title}
      </Link>
    </ListItem>
  );
};

export default SearchResultElement;
