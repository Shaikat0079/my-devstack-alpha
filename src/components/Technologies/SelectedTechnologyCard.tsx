import type { ITechnology } from "../../types/technologyType";
import { GiSparkyBomb } from "react-icons/gi";

interface SelectedTechnologyCardProps {
  technology: ITechnology;
  handleRemoveTechnology: (technology: ITechnology) => void;
}

const SelectedTechnologyCard = ({
  technology,
  handleRemoveTechnology,
}: SelectedTechnologyCardProps) => {
  return (
    <div
      className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
    >
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {technology.name}
          </h3>

          <p className="text-xs text-gray-400">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveTechnology(technology)}
        className="text-red-500 transition-colors hover:text-red-700"
        aria-label={`Remove ${technology.name}`}
      >
        <GiSparkyBomb className="cursor-pointer text-5xl" />
      </button>
    </div>
  );
};

export default SelectedTechnologyCard;