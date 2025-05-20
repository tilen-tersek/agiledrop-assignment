import "./MultiSelectFilter.scss";
import type { Genre } from "../../../../types/api/tmdb/tmdb.types.ts";

interface IProps {
  value: Genre;
  isActive?: boolean;
  onClick?: () => void;
}

const MultiSelectFilter = ({ value, isActive = false, onClick }: IProps) => {
  return (
    <div
      className={`msf-container ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="msf-value">{value.name}</div>
    </div>
  );
};

export default MultiSelectFilter;
