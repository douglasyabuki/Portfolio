// Components
import SkillCard from './skill-card/SkillCard';
import SkillHideButton from './skill-hide-button/SkillHideButton';

// Interface
import { ISkill } from '../../../../interfaces/ISkill';

// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  list: ISkill[];
}

// Skills (Tech stack) main function
export default function Skills({ list }: Props) {

  // Setting states
  const [isVisionOk, setIsVisionOk] = useState<boolean>(false);

  // Separating the received list based on property value
  const learnt = list.filter((element) => element.learning === false);
  const learning = list.filter((element) => element.learning === true);

  // Returns the rendered Skills (Tech stack) to Resume.tsx
  return (
    <div className="w-auto space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Tech Stack</h1>
      <div className="m-auto grid w-fit grid-cols-3 gap-3 md:gap-5">
        {learnt.map((item) => (
          <SkillCard item={item} key={item.id}></SkillCard>
        ))}
      </div>
      <SkillHideButton isActive={isVisionOk} setIsActive={setIsVisionOk}></SkillHideButton>
      <h2
        className={`${
          isVisionOk ? 'opacity-100' : 'opacity-0'
        } mb-2 text-xl font-bold transition-opacity duration-500 ease-in-out md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl`}
      >
        Next Techs
      </h2>
      <div
        className={`${
          isVisionOk ? 'opacity-100' : 'opacity-0'
        } m-auto grid w-fit grid-cols-3 gap-3 transition-opacity duration-500 ease-in-out md:gap-5`}
      >
        {learning.map((item) => (
          <SkillCard item={item} key={item.id}></SkillCard>
        ))}
      </div>
    </div>
  );
}
