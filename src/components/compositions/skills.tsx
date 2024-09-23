
import { Dumbbell } from 'lucide-react';
import SkillsWordCloud from '../patterns/skills-word-cloud';


const Skills = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 py-8 align-middle 2xl:px-6 4xl:py-12" id="skill">
            <div className="flex flex-col items-start w-full gap-4">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <Dumbbell />
                    <span className="text-sm font-medium uppercase text-foreground/60">Skills</span>
                </div>
                <h2 className="text-2xl font-bold 4xl:text-3xl">Technology Stack</h2>
            </div>
            <div className="flex w-full max-w-4xl">
                <SkillsWordCloud />
            </div>

        </div>
    );
};

export default Skills;
