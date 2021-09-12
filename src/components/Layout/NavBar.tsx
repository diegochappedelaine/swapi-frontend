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

import { FaSpaceShuttle, FaFilm } from "react-icons/fa";
import { IoPeopleOutline, IoBusOutline } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { GiSuspicious } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Links = [
  { label: "Search", url: "/", icon: <FiSearch /> },
  { label: "Characters", url: "/peoples", icon: <IoPeopleOutline /> },
  { label: "Movies", url: "/films", icon: <FaFilm /> },
  { label: "Planets", url: "/planets", icon: <BiPlanet /> },
  { label: "Species", url: "/species", icon: <GiSuspicious /> },
  { label: "Starships", url: "/starships", icon: <FaSpaceShuttle /> },
  { label: "Vehicles", url: "/vehicles", icon: <IoBusOutline /> },
  { label: "Favorites", url: "/favorites", icon: <AiFillStar /> },
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
              spacing={2}
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
                <Flex onClick={onClose} alignItems={"center"}>
                  <Box mr={4}>{link.icon}</Box>
                  {link.label}
                </Flex>
              </NavLink>
            ))}
            <Button onClick={toggleColorMode} display={"flex"}>
              {colorMode === "light" ? <MoonIcon mr={4} /> : <SunIcon mr={4} />}
              <Box mr={"auto"}>
                {colorMode === "light" ? "Toggle" : "Disable"} Dark Mode
              </Box>
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
