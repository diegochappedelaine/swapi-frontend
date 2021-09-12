import {
  UnorderedList,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

type DisplayInformationsCardProps = {
  informations: { label: string; value?: string | number }[];
};

const DisplayInformationsCard: React.FC<DisplayInformationsCardProps> = ({
  informations,
}) => {
  return (
    <UnorderedList
      styleType={"none"}
      maxW={"xl"}
      width={"100%"}
      mx={"auto"}
      bg={useColorModeValue("gray.200", "gray.700")}
      px={{ base: 5, lg: 20 }}
      py={10}
      rounded={"lg"}
      mb={8}
    >
      {informations.map(({ label, value }, index) => (
        <Flex key={index} mb={1}>
          <Text>
            <Box as="span" fontWeight={700}>
              {`${label} :`}
            </Box>{" "}
            {value || "N/A"}
          </Text>
        </Flex>
      ))}
    </UnorderedList>
  );
};

export default DisplayInformationsCard;
