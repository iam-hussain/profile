
import { Dumbbell } from 'lucide-react';
import SkillsWordCloud from '../patterns/skills-word-cloud';


const Skills = () => {

    return (
        <div className="flex flex-col gap-12" id="skill">
            <div className="flex flex-col items-start w-auto gap-4 pb-8">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <Dumbbell />
                    <span className="text-sm font-medium uppercase text-foreground/60">Skills</span>
                </div>
                <h2 className="text-3xl font-bold">Technology Stack</h2>
            </div>
            <div className="flex">
                <SkillsWordCloud />
            </div>

        </div>
    );
};

export default Skills;
