import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    return{" "}
    <Input
      ref={ref}
      borderRadius={20}
      placeholder="Search"
      variant={"filled"}
    />
    ;
  </form>;
};

export default SearchBar;
