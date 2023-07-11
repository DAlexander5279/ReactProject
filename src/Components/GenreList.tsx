import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button
              onClick={() => onSelectGenre(genres)}
              fontSize={"lg"}
              variant="link"
            >
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
