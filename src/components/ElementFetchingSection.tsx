import { Flex, useColorModeValue, Heading } from "@chakra-ui/react";

import { retreiveDataTypeAndIdFromUrl } from "utils";
import { FetchDataNameLink } from "components";

type ElementFetchingSectionProps = {
  urls: string[];
  sectionName: string;
};

const ElementFetchingSection: React.FC<ElementFetchingSectionProps> = ({
  urls,
  sectionName,
}) => {
  return (
    <Flex flexDir={"column"}>
      <Heading mb={8} textAlign="center" fontSize={"2xl"}>
        {sectionName}
      </Heading>
      <Flex
        maxW={"xl"}
        flexDir={"column"}
        width={"100%"}
        mx={"auto"}
        bg={useColorModeValue("gray.200", "gray.700")}
        px={{ base: 5, lg: 20 }}
        py={10}
        rounded={"lg"}
        mb={8}
      >
        {urls.map((element, index) => {
          const { id, dataType } = retreiveDataTypeAndIdFromUrl(element);
          return <FetchDataNameLink key={index} id={id} dataType={dataType} />;
        })}
      </Flex>
    </Flex>
  );
};

export default ElementFetchingSection;
