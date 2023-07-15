import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/png-clipart-gym-logo-mark-gym.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
