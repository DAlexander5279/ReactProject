import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Video-Game-Controller-Logo-Graphics-69127373-1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
interface Props {
  onSearch: (searchGame: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} objectFit={"cover"} boxSize="60px"></Image>
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
