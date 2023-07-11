import { useEffect, useState } from "react";
import apiToClient from "../services/apiToClient";
import { Genre } from "./useGenres";
import useData from "./useData";


//whole interface for each game in the api
export interface Games {
    id: number; //ID for each Game
    name: string; // Name of each Game
    background_image: string; // The image associated with each Game
    parent_platforms: {platform : Platform}[] //cant be an array of objects because of how the api was set up. has to be an object with platform property
    metacritic: number; // Number between 1-100 that represents the games score
  }
  
  //Inteface for the Platform Object, Will contain the information for the platform for the games
  export interface Platform{
    id : number;
    name: string;
    slug: string;
  }
const useGames = (selectedGenre : Genre | null) => useData<Games>('/games', {params: {genres: selectedGenre?.id}},[selectedGenre?.id])
export default useGames;