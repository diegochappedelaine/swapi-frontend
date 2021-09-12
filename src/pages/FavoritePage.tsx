import { useAppContext } from "provider/AppProvider";
import { FetchDataNameLink } from "components";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FavoritePage = () => {
  const { favorites } = useAppContext();

  return (
    <Flex flexDir={"column"}>
      <Heading mt={4} mb={16} as="h1" textAlign="center">
        Favorites
      </Heading>
      {!favorites.length && (
        <>
          <Text textAlign="center" mb={8}>
            You dont have any favorite yet
          </Text>
          <Button
            as={RouterLink}
            fontWeight={700}
            width={"fit-content"}
            mx={"auto"}
            to="/"
          >
            Start browsing now
          </Button>
        </>
      )}
      {favorites.map((favorite, index) => {
        const [dataType, id] = favorite.split("-");
        return <FetchDataNameLink key={index} dataType={dataType} id={id} />;
      })}
    </Flex>
  );
};

export default FavoritePage;
