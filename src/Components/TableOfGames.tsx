import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./gameCards";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameTable = ({ selectedGenre }: Props) => {
  const { data } = useGames(selectedGenre);
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
