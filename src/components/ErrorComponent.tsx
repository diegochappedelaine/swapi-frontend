import { Center, Text, Box } from "@chakra-ui/react";

const ErrorComponent = () => {
  return (
    <Center my={140}>
      <Text textAlign="center">
        I felt a great disturbance in the Force, as if millions of API requests
        suddenly cried out in terror and were suddenly silenced.
        <br />I fear something terrible has happened ...
        <br />
        <br />
        <Box as="span" fontWeight={700}>
          (Looks like there is an issue with our API, please try later or
          contact admin)
        </Box>
      </Text>
    </Center>
  );
};

export default ErrorComponent;
