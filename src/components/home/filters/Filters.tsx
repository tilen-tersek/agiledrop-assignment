import "./Filters.scss";
import { useState } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiSelectFilter from "./multi-select-filter/MultiSelectFilter.tsx";

const genreOptions = ["Action", "Drama", "Comedy", "Horror", "Sci-Fi"];

const Filters = () => {
  const [open, setOpen] = useState(false);
  const [activeGenres, setActiveGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setActiveGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const search = () => {
    // TODO api refresh
  };

  return (
    <div className="f-container card">
      <div className="f-header" onClick={() => setOpen(!open)}>
        <span>Filters</span>
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronRight} />
      </div>

      {open && (
        <div className="f-content">
          <div className="f-filter">
            <div className="f-filter-name">Genres</div>
            <div className="f-filter-options">
              {genreOptions.map((genre) => (
                <MultiSelectFilter
                  key={genre}
                  value={genre}
                  isActive={activeGenres.includes(genre)}
                  onClick={() => toggleGenre(genre)}
                />
              ))}
            </div>
          </div>

          <div className="f-search">
            <button
              className="f-button"
              onClick={() => search()}
              disabled={activeGenres.length === 0}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
