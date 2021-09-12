import { Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink: React.FC<{ to: string }> = ({ children, to }) => (
  <Link
    as={RouterNavLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeStyle={{
      fontWeight: 500,
      color: useColorModeValue("black", "white"),
    }}
    to={to}
  >
    {children}
  </Link>
);

export default NavLink;
