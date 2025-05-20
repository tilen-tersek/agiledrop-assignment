import "./MultiSelectFilter.scss";

interface IProps {
  value: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MultiSelectFilter = ({ value, isActive = false, onClick }: IProps) => {
  return (
    <div
      className={`msf-container ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="msf-value">{value}</div>
    </div>
  );
};

export default MultiSelectFilter;
