import { useEffect, useState } from "react";
import apiToClient from "../services/apiToClient";


export interface Games {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchedGames {
    count: number;
    results: Games[];

  }

const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    useEffect(() => {
        const controller = new AbortController();
      apiToClient
        .get<FetchedGames>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results));

        return () => controller.abort();
    }, []);

    return {games}
  
}
export default useGames;