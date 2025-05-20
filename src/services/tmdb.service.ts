import type { Genre, Movie } from "../types/api/tmdb/tmdb.types.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesByGenres = async (
  genreIds: number[],
  page = 1,
): Promise<Movie[]> => {
  console.log(import.meta.env.VITE_TMDB_API_KEY);
  const genreParam = genreIds.join(",");

  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreParam}&page=${page}`,
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results as Movie[];
};

export const fetchGenres = async (): Promise<Genre[]> => {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  );
  if (!res.ok) throw new Error("Failed to fetch genres");
  const data = await res.json();
  return data.genres;
};
