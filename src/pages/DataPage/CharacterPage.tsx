import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { Character } from "types";
import { ElementPageLayout, Loading } from "components";
import { UnorderedList, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: character,
    loading,
    error,
  } = useFetch<Character>(`${API_GET_PEOPLE}/${id}`);

  const formatedData = [
    { label: "Name", value: character?.name },
    { label: "Gender", value: character?.gender },
    { label: "Height", value: character?.height },
    { label: "Mass", value: character?.mass },
    { label: "Hair color", value: character?.hair_color },
    { label: "Eyes color", value: character?.eye_color },
    { label: "Skin color", value: character?.skin_color },
  ];

  console.log(character);

  return (
    <ElementPageLayout title={character?.name || ""}>
      {loading && <Loading />}
      {error && <p>Error</p>}
      <UnorderedList
        styleType={"none"}
        maxW={"xl"}
        mx={"auto"}
        bg={useColorModeValue("gray.200", "gray.700")}
        px={20}
        py={10}
        rounded={"lg"}
      >
        {formatedData.map(({ label, value }, index) => (
          <Flex key={index} mb={1}>
            <Text fontWeight={500} mr={1}>
              {`${label} :`}
            </Text>
            <Text>{value || "N/A"}</Text>
          </Flex>
        ))}
      </UnorderedList>
    </ElementPageLayout>
  );
};

export default CharacterPage;
