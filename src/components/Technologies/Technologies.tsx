import { use } from 'react';
import type { ITechnology } from '../../types/technologyType';

interface TechnologiesProps{
    technologiesPromise:Promise<ITechnology[]>;
}
const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    console.log(technologies)
    return (
        <div>
            
        </div>
    );
};

export default Technologies;