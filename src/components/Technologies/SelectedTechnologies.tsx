import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";
import { GiSparkyBomb } from "react-icons/gi";

interface ISelectedTechnologiesProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologiesProps) => {
  const handleRemoveTechnology = (technology: ITechnology) => {
    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== technology.id),
    );
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} technologies selected.`}
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-4 flex h-16 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/50">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
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

                  <p className="text-xs text-gray-400">{technology.category}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveTechnology(technology)}
                className="text-xs font-semibold text-red-500 hover:text-red-700"
              >
                <GiSparkyBomb className="cursor-pointer text-5xl"/>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedTechnologies;
