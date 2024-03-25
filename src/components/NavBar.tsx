import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={10} />
      <Box pr={4}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
