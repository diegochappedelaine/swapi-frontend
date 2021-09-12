import {
  Button,
  FormControl,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { API_SEARCH } from "api/end-points";

type FormProps = {
  handleSubmit: (url: string) => Promise<() => void>;
};

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearch(e.target.value);

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!search.trim().length) return;
    handleSubmit(`${API_SEARCH}?value=${search}`);
    setSearch("");
  };

  return (
    <>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"2xl"}
        bg={useColorModeValue("gray.100", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        mx={"auto"}
      >
        <FormControl
          as="form"
          onSubmit={onSubmit}
          display={"flex"}
          flexDirection={"row"}
        >
          <Input
            bg={"white"}
            placeholder="Ex: x-wing"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={search}
            onChange={handleChange}
            mr={4}
            color={"gray.700"}
          />
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Search
          </Button>
        </FormControl>
      </Stack>
    </>
  );
};

export default Form;
