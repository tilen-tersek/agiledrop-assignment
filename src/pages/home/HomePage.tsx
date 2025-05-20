import HomeWrapper from "../../layouts/home/HomeWrapper.tsx";
import "./HomePage.scss";

const HomePage = () => {
  const movies = new Array(120).fill("Movie");

  return (
    <div className="hp-container">
      <div className="hp-title">Popular movies</div>
      <HomeWrapper>
        <div className="hp-filters">
          <div className="hp-filter card">Filters</div>
        </div>
        <div className="hp-content">
          {movies.map((movie, index) => (
            <div className="hp-movie card">
              {movie} {index + 1}
            </div>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default HomePage;
