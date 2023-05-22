import React, { useEffect, useState } from "react";
import apiToClient from "../services/apiToClient";

interface Games {
  id: number;
  name: string;
}

interface FetchedGames {
  count: number;
  results: Games[];
}

const GameTable = () => {
  const [games, setGames] = useState<Games[]>([]);
  useEffect(() => {
    apiToClient
      .get<FetchedGames>("/games")
      .then((res) => setGames(res.data.results));
  });

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}> {game.name}</li>
      ))}
    </ul>
  );
};

export default GameTable;
