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
import { throttle } from "lodash";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [activeGenres, setActiveGenres] = useState<Genre[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasLoadMoreBeenClicked, setHasLoadMoreBeenClicked] =
    useState<boolean>(false);

  const getMovies = async (append?: boolean) => {
    try {
      const results = await fetchMoviesByGenres(
        activeGenres.map((genre: Genre) => genre.id),
        page,
      );

      if (append) {
        setMovies((prev) => [...prev, ...results]);
        return;
      }
      setMovies(results);
    } catch (err) {
      console.error(err);
      setMovies([]);
    }
  };

  const getGenres = async () => {
    try {
      const results = await fetchGenres();
      setGenres(results);
    } catch (err) {
      console.error(err);
      setGenres([]);
    }
  };

  // Genre options
  useEffect(() => {
    getGenres();
  }, []);

  // Movies -> load more clicked
  useEffect(() => {
    getMovies(true);
  }, [page]);

  // Movies -> filters changed
  useEffect(() => {
    setPage(1);
    getMovies(false);
  }, [activeGenres]);

  // Scroll behaviour
  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        if (hasLoadMoreBeenClicked) {
          setPage(page + 1);
        }
      }
    }, 500);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasLoadMoreBeenClicked]);

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
          {movies.length > 0 ? (
            movies.map((movie: Movie, index: number) => (
              <MovieCard movie={movie} key={index} />
            ))
          ) : (
            <div className="hp-no-movies">
              No movies match your current criteria.
            </div>
          )}
        </div>

        <div className="hp-empty-div"></div>

        {!hasLoadMoreBeenClicked && movies.length >= 20 && (
          <button
            className="hp-load-more"
            onClick={() => setHasLoadMoreBeenClicked(true)}
          >
            Load more
          </button>
        )}
      </HomeWrapper>
    </div>
  );
};

export default HomePage;
