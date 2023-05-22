import React from "react";
import { Games } from "../hooks/useGames";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
