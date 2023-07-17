import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameTable from "./Components/TableOfGames";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface SharedGame {
  genre: Genre | null;
  searchText: string;
}

function App() {
  const [sharedGame, setSharedGame] = useState<SharedGame>({} as SharedGame);
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setSharedGame({ ...sharedGame, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) => setSharedGame({ ...sharedGame, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameTable sharedGame={sharedGame} />
      </GridItem>
    </Grid>
  );
}

export default App;
