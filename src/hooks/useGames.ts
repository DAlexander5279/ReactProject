import { useEffect, useState } from "react";
import apiToClient from "../services/apiToClient";


//whole interface for each game in the api
export interface Games {
    id: number; //ID for each Game
    name: string; // Name of each Game
    background_image: string; // The image associated with each Game
    parent_platforms: {platform : Platform}[] //cant be an array of objects because of how the api was set up. has to be an object with platform property
  }
  
  //Inteface for the Platform Object, Will contain the information for the platform for the games
  interface Platform{
    id : number;
    name: string;
    slug: string;
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