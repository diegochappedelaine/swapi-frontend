import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "components";
import NavLink from "./NavLink";

const Links = [
  { label: "Search", url: "/peoles" },
  { label: "Characters", url: "/peoples" },
  { label: "Movies", url: "/films" },
  { label: "Planets", url: "/planets" },
  { label: "Species", url: "/species" },
  { label: "Starships", url: "/starships" },
  { label: "Vehicles", url: "/vehicles" },
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container>
        <Flex
          as="header"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text
              as={RouterLink}
              fontWeight={700}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              isTruncated
              to="/"
            >
              Rebels Alliance Search System
            </Text>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index} to={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Button
            display={{ base: "none", lg: "flex" }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Container>

      {isOpen && (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
              <NavLink key={index} to={link.url}>
                <Box onClick={onClose}>{link.label}</Box>
              </NavLink>
            ))}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon marginRight="auto" />
              ) : (
                <SunIcon marginRight="auto" />
              )}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
