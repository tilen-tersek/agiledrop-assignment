import HomeWrapper from "../../layouts/home/HomeWrapper.tsx";
import "./HomePage.scss";
import MovieCard from "../../components/home/movie-card/MovieCard.tsx";
import Filters from "../../components/home/filters/Filters.tsx";
import { useEffect, useState } from "react";
import type { Genre, Movie } from "../../types/api/tmdb/tmdb.types.ts";
import {
  fetchGenres,
  fetchMoviesByGenres,
} from "../../services/tmdb.service.ts";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [activeGenres, setActiveGenres] = useState<Genre[]>([]);

  // Genre options
  useEffect(() => {
    const getGenres = async () => {
      try {
        const results = await fetchGenres();
        setGenres(results);
      } catch (err) {
        console.error(err);
        setGenres([]);
      }
    };

    getGenres();
  }, []);

  // Movies
  useEffect(() => {
    if (genres.length === 0) return;

    const getMovies = async () => {
      try {
        const results = await fetchMoviesByGenres(
          activeGenres.map((genre: Genre) => genre.id),
        );
        setMovies(results);
      } catch (err) {
        console.error(err);
        setMovies([]);
      }
    };
    getMovies();
  }, [activeGenres]);

  return (
    <div className="hp-container">
      <div className="hp-title">Popular movies</div>
      <HomeWrapper>
        <div className="hp-filters">
          <Filters
            genres={genres}
            onGenresChange={(activeGenres: Genre[]): void =>
              setActiveGenres(activeGenres)
            }
          />
        </div>
        <div className="hp-content">
          {movies.map(() => (
            <MovieCard />
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default HomePage;
