import { use, useState } from "react";

import type { ITechnology } from "../../types/technologyType";

import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";
import { Bounce, toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<ITechnology[]>([]);

  const handleSelectTechnology = (technology: ITechnology) => {
    setSelectedTechnologies((prev) => [...prev, technology]);
    toast.success(`${technology.name} added successfully!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="container mx-auto">

      <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-wider">
        <span className="bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h2>

      <div className="flex">
        <div className="basis-2/3 grid max-w-5xl grid-cols-1 justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleSelectTechnology={handleSelectTechnology}
            selectedTechnologies = {selectedTechnologies}
          />
        ))}
      </div>

      <div className="basis-1/3">
        <SelectedTechnologies
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />
      </div>
      </div>

    </div>
  );
};

export default Technologies;