import React from "react";
import { Games } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
interface Props {
  game: Games;
}
//Card for each game
const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatFormIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
