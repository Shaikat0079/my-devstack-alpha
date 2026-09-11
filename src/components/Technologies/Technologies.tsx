import { use } from "react";
import type { ITechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);
  return (
    <div className="container mx-auto">
      <h2 className="mb-10 text-center text-4xl font-extrabold uppercase tracking-wider">
        <span className="bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
