import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/png-clipart-gym-logo-mark-gym.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
