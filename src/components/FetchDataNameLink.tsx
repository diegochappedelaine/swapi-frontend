import { useFetch } from "hooks";
import { API_URL } from "api/end-points";
import { Link as RouterLink } from "react-router-dom";
import { Link, useColorModeValue, Box } from "@chakra-ui/react";
import { SwapiRessources } from "types";
import { DataTypeIcon, HandleFavorite } from "components";

type FetchAndDisplayElementProps = {
  dataType: string;
  id: string;
};

const FetchAndDisplayElement: React.FC<FetchAndDisplayElementProps> = ({
  dataType,
  id,
}) => {
  const { data } = useFetch<{ name?: string; title?: string }>(
    `${API_URL}/${dataType}/${id}`
  );

  return (
    <Link
      as={RouterLink}
      to={`/${dataType}/${id}`}
      rounded={"lg"}
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
      mb={4}
    >
      <Box as="span" mr={4} fontSize="lg">
        <DataTypeIcon dataType={dataType as SwapiRessources} />
      </Box>
      {data?.name || data?.title}
      <HandleFavorite dataType={dataType} id={id} />
    </Link>
  );
};

export default FetchAndDisplayElement;
