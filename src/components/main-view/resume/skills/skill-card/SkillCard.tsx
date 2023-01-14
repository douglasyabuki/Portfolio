// Interfaces
import { ISkill } from '../../../../../interfaces/ISkill';

// Props destructuring
interface Props {
  item: ISkill;
}

// Skill Card (Tech stack) main function
export default function SkillCard({ item }: Props) {

  // Returns a single card to Skills.tsx
  return (
    <div className="group container flex h-20 w-20 scale-100 items-center justify-center rounded-xl bg-background-div1 shadow-md shadow-black transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black xs:h-24 xs:w-24 md:h-40 md:w-40">
      <div className="block">
        <a className="h-auto w-auto" href={item.skillUrl}>
          {item.skillImg ? (
            <img
              src={item.skillImg}
              alt={item.skillImgAlt}
              className="cover m-1 h-5 w-5 opacity-60 transition-opacity duration-300 group-hover:opacity-100 xs:h-6 xs:w-6 md:h-9 md:w-9"
            ></img>
          ) : (
            <i
              className={`${item.skillIcon} text-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 xs:text-2xl md:text-4xl`}
            ></i>
          )}
          <h2 className="-mt-3 text-xs opacity-0 transition-all duration-300 ease-in-out group-hover:m-0 group-hover:opacity-80 xs:text-sm md:text-lg">
            {item.skillName}
          </h2>
        </a>
      </div>
    </div>
  );
}
