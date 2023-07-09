import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genres) => (
        <ListItem key={genres.id} paddingY={"1"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genres.image_background)}
            />
            <Button fontSize={"lg"} variant="link">
              {" "}
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
