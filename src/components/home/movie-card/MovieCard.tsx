import "./MovieCard.scss";
import UserScoreBanner from "./user-score-banner/UserScoreBanner.tsx";
import type { Movie } from "../../../types/api/tmdb/tmdb.types.ts";
import { useState } from "react";
import { FALLBACK_IMAGE } from "../../../consts/images/images.ts";
import { formatDate } from "../../../utils/date/date.ts";

interface IProps {
  movie: Movie;
}

const getUserScore = (vote: number): number => {
  return Math.round(vote ? vote * 10 : 50);
};

const MovieCard = ({ movie }: IProps) => {
  const [posterUrl] = useState<string>("https://image.tmdb.org/t/p/w500");

  return (
    <div className="mc-container card">
      <div className="mc-image">
        <img
          alt={movie.title}
          src={`${posterUrl}${movie.poster_path}`}
          onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
        />
        <div className="mc-banner">
          <UserScoreBanner userScore={getUserScore(movie.vote_average)} />
        </div>
      </div>
      <div className="mc-data-container">
        <div className="mc-top-data">
          <div className="mc-title line-clamp-2">
            {movie.title ?? "No title was provided for this movie."}
          </div>
          <div className="mc-date line-clamp-1">
            {formatDate(movie.release_date ?? Date.now())}
          </div>
        </div>
        <div className="mc-description line-clamp-2">
          {movie.overview ?? "No overview was provided for this movie."}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
