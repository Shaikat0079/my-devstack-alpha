import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";

interface ITechnologyCardProps {
technology: ITechnology;
handleSelectTechnology: (technology: ITechnology) => void;
}

const TechnologyCard = ({ technology,handleSelectTechnology}: ITechnologyCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectedTechno =()=>{
    setIsSelected(true)
  }
  console.log(isSelected, setIsSelected, "isSelected, setIsSelected");
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/40">
      {/* Gaming glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-400/15 blur-3xl transition-all duration-500 group-hover:bg-purple-400/30" />

      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-red-400/10 blur-3xl transition-all duration-500 group-hover:bg-red-400/20" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          {/* Icon */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-2 shadow-sm transition-all duration-300 group-hover:border-purple-200 group-hover:bg-purple-50">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Badge */}
          <span className="rounded-full border border-purple-200 bg-linear-to-r from-red-50 to-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-600">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="mt-5 text-xl font-extrabold uppercase tracking-wide text-gray-900">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="mt-2 min-h-15 text-sm leading-5 text-gray-500">
          {technology.description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

        {/* Stats */}
        <div className="flex items-center justify-between">
          <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
            {technology.category}
          </span>

          <span className="text-xs font-medium text-gray-500">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 text-sm font-bold text-gray-700">
            <span className="text-yellow-400">★</span>
            {technology.rating}
          </span>
        </div>

        {/* Gaming Button */}
        <button
          onClick={() => handleSelectTechnology(technology)}
          className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-950 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-red-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.98]"
          disabled={isSelected ? true : false}
        >
          {isSelected === true ? "Selected" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
