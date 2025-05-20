import "./MovieCard.scss";
import UserScoreBanner from "./user-score-banner/UserScoreBanner.tsx";

const MovieCard = () => {
  return (
    <div className="mc-container card">
      <div className="mc-image">
        <img alt="movie" src="public/movie.webp" />
        <div className="mc-banner">
          <UserScoreBanner userScore={55} />
        </div>
      </div>
      <div className="mc-data-container">
        <div className="mc-title">A Minecraft Movie</div>
        <div className="mc-date">Mar 31, 2025</div>
        <div className="mc-description">
          Four misfits find themselves struggling with ordinary problems when
          they are suddenly pulled through a mysterious portal into the
          Overworld: a bizarre, cubic wonderland that thrives on imagination. To
          get back home, they'll have to master this world while embarking on a
          magical quest with an unexpected, expert crafter, Steve.
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
