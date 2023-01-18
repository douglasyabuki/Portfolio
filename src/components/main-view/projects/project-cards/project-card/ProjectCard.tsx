// Interfaces
import { IProject } from '../../../../../interfaces/IProject';
import { ISkill } from '../../../../../interfaces/ISkill';

// Components
import CardImageFrame from './card-image-frame/CardImageFrame';
import LinksFrame from './links-frame/LinksFrame';

// Const
import { skillList } from '../../../resume/skills/skill-list/skill-list';

// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  item: IProject;
}

// Project Card main function
export default function ProjectCard({ item }: Props) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  function filterSkillsByProject(skills: ISkill[], projects: IProject[]) {
    const filteredSkills = skills.filter((skill) => {
      return projects.some((project) => project.techs.includes(skill.skillName));
    });
    return filteredSkills;
  }

  const filteredSkills = filterSkillsByProject(skillList, [item]);

  const onClickHandler = () => {
    setIsExtended(!isExtended);
  };

  // Returns a single card to be rendered by ProjectCards.tsx
  return (
    <div
      role={'button'}
      onClick={onClickHandler}
      className={`${
        isExtended
          ? `cursor-default hover:shadow-outer ${item.id % 2 === 0 ? `custom-bg-1` : `custom-bg-2`}`
          : `bg-background-div1 hover:-translate-y-5 hover:shadow-lg hover:shadow-translucid-black ${
              item.id % 2 !== 0 ? `lg:translate-x-20` : `lg:-translate-x-20`
            } `
      } group container block h-auto w-auto transform space-y-8 rounded-xl  p-4 py-12 shadow-md shadow-translucid-black transition-all duration-300  xs:p-6 xs:py-16 md:rounded-3xl md:p-12 lg:m-auto lg:flex lg:min-h-[350px] lg:w-fit lg:space-y-0 lg:p-8 xl:p-12`}
    >
      <div
        className={`${
          isExtended ? `` : `lg:w-72 2xl:w-96`
        } flex-col space-y-8 text-center align-middle lg:py-12 xl:space-y-12 xl:py-16`}
      >
        <div className="block space-y-8">
          <h2 className="mb-2 text-xl font-bold xs:text-2xl md:text-4xl lg:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
            {item.name}
          </h2>
          <div className="flex h-5 w-auto justify-center gap-2 lg:h-6 lg:gap-3 2xl:h-9">
            {filteredSkills.map((filteredSkill) => (
              <a href={filteredSkill.skillUrl} key={filteredSkill.id}>
                {filteredSkill.skillImg ? (
                  <img
                    className="cover h-5 w-5 translate-y-1 opacity-80 hover:opacity-100 lg:h-6 lg:w-6 2xl:h-9 2xl:w-9"
                    src={filteredSkill.skillImg}
                    alt={filteredSkill.skillImgAlt}
                  ></img>
                ) : (
                  <i
                    className={`${filteredSkill.skillIcon} text-xl opacity-80 hover:opacity-100 lg:text-2xl 2xl:text-4xl`}
                  ></i>
                )}
              </a>
            ))}
          </div>
        </div>
        <h3 className="opacity-60 xs:text-lg md:text-xl lg:px-4 lg:text-lg xl:text-xl 2xl:text-3xl">
          {item.description}
        </h3>
      </div>
      <CardImageFrame isExtended={isExtended} src={item.imageSrc} alt={item.imageAlt}></CardImageFrame>
      <LinksFrame isExtended={isExtended} gitUrl={item.gitUrl} projectUrl={item.url}></LinksFrame>
    </div>
  );
}
