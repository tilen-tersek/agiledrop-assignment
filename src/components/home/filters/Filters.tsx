import "./Filters.scss";
import { useState } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiSelectFilter from "./multi-select-filter/MultiSelectFilter.tsx";
import type { Genre } from "../../../types/api/tmdb/tmdb.types.ts";

interface IProps {
  genres: Genre[];
  onGenresChange: (activeGenres: Genre[]) => void;
}

const Filters = ({ genres, onGenresChange }: IProps) => {
  const [open, setOpen] = useState(false);
  const [lastSentGenres, setLastSentGenres] = useState<Genre[]>([]);
  const [activeGenres, setActiveGenres] = useState<Genre[]>([]);

  const haveGenresChanged = () => {
    return JSON.stringify(lastSentGenres) !== JSON.stringify(activeGenres);
  };

  const toggleGenre = (genre: Genre) => {
    setActiveGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g.id !== genre.id)
        : [...prev, genre],
    );
  };

  const search = () => {
    onGenresChange(activeGenres);
    setLastSentGenres(activeGenres);
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
              {genres.map((genre) => (
                <MultiSelectFilter
                  key={genre.id}
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
              disabled={!haveGenresChanged()}
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
