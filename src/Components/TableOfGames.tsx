import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./gameCards";
const GameTable = () => {
  const { games } = useGames();
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {games.map((game) => (
        <GameCards key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameTable;
