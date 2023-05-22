import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameTable from "./Components/TableOfGames";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="cadetblue">
        <GameTable />
      </GridItem>
    </Grid>
  );
}

export default App;
