import { useEffect, useState } from "react";
import apiToClient from "../services/apiToClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchedGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    useEffect(() => {
        const controller = new AbortController();
      apiToClient
        .get<FetchedGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => setGenres(res.data.results));

        return () => controller.abort();
    }, []);

    return {genres}};

export default useGenres;