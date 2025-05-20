import HomeWrapper from "../../layouts/home/HomeWrapper.tsx";
import "./HomePage.scss";
import MovieCard from "../../components/home/movie-card/MovieCard.tsx";
import Filters from "../../components/home/filters/Filters.tsx";

const HomePage = () => {
  const movies = new Array(120).fill("Movie");

  return (
    <div className="hp-container">
      <div className="hp-title">Popular movies</div>
      <HomeWrapper>
        <div className="hp-filters">
          <Filters />
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
