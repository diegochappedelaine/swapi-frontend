import { Link, ListItem, useColorModeValue, Box } from "@chakra-ui/react";
import { Link as RooterLink } from "react-router-dom";
import { SwapiRessources } from "types";
import { FaSpaceShuttle, FaFilm } from "react-icons/fa";
import { IoPeopleOutline, IoBusOutline } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { GiSuspicious } from "react-icons/gi";

type SearchResultElementProps = {
  element: {
    name?: string;
    title?: string;
  };
  url: string;
  dataType: SwapiRessources;
};

const dataTypeIcon = (dataType: SwapiRessources) => {
  switch (dataType) {
    case SwapiRessources.FILMS:
      return <FaFilm />;
    case SwapiRessources.PEOPLE:
      return <IoPeopleOutline />;
    case SwapiRessources.PLANETS:
      return <BiPlanet />;
    case SwapiRessources.SPECIES:
      return <GiSuspicious />;
    case SwapiRessources.STARSHIPS:
      return <FaSpaceShuttle />;
    case SwapiRessources.VEHICLES:
      return <IoBusOutline />;
  }
};

const SearchResultElement: React.FC<SearchResultElementProps> = ({
  element,
  url,
  dataType,
}) => {
  const DataTypeIcon = dataTypeIcon(dataType);

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
        display={"flex"}
        alignItems={"center"}
        bg={useColorModeValue("gray.200", "gray.700")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.300", "gray.500"),
        }}
      >
        <Box as="span" mr={4} fontSize="lg">
          {DataTypeIcon}
        </Box>

        {element?.name || element?.title}
      </Link>
    </ListItem>
  );
};

export default SearchResultElement;
