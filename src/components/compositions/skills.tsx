
import { Dumbbell } from 'lucide-react';
import SkillsWordCloud from '../patterns/skills-word-cloud';


const Skills = () => {

    return (
        <div className="flex flex-col 4xl:gap-12 gap-8 2xl:px-6 py-8 4xl:py-12 w-full justify-center align-middle items-center" id="skill">
            <div className="flex flex-col items-start w-full gap-4">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <Dumbbell />
                    <span className="text-sm font-medium uppercase text-foreground/60">Skills</span>
                </div>
                <h2 className="4xl:text-3xl text-2xl font-bold">Technology Stack</h2>
            </div>
            <div className="flex max-w-xl w-full">
                <SkillsWordCloud />
            </div>

        </div>
    );
};

export default Skills;
