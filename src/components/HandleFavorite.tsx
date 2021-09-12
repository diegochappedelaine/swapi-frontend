import { Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useAppContext } from "provider/AppProvider";
import React from "react";

type HandleFavoriteProps = {
  id: string;
  dataType: string;
};

const HandleFavorite: React.FC<HandleFavoriteProps> = ({ id, dataType }) => {
  const favoriteId = `${dataType}-${id}`;

  const { favorites, handleFavorite } = useAppContext();
  const isFavorite = favorites.includes(favoriteId);

  return (
    <Button
      as="button"
      ml="auto"
      bg={isFavorite ? "yellow.400" : "gray.100"}
      color={isFavorite ? "white" : "gray.500"}
      p={2}
      rounded={"full"}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        handleFavorite(favoriteId);
      }}
    >
      <AiFillStar />
    </Button>
  );
};

export default HandleFavorite;
