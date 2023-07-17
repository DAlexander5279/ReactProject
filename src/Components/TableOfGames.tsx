import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./gameCards";
import { Genre } from "../hooks/useGenres";
import { SharedGame } from "../App";

interface Props {
  sharedGame: SharedGame;
}

const GameTable = ({ sharedGame }: Props) => {
  const { data } = useGames(sharedGame);
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {data.map((game) => (
        <GameCards game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameTable;
