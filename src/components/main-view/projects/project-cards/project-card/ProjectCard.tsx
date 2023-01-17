// Interfaces
import { IProject } from '../../../../../interfaces/IProject';

// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  item: IProject;
}

// Project Card main function
export default function ProjectCard({ item }: Props) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  item.id;
  item.name;
  item.description;
  item.url;
  item.gitUrl;
  item.techs;

  // Returns a single card to be rendered by ProjectCards.tsx
  return (
    <div className="container relative m-auto h-auto w-fit flex-col items-center justify-between bg-background-div1 rounded-xl">
      <h1 className='mb-2 text-center text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl'>{item.name}</h1>
      <div className="flex">
        <img className="cover shaped-div1" src={item.imageSrc} alt={item.imageAlt} />
      </div>
        <div className="z-40 h-96 rounded-xl">
          <h2>{item.description}</h2>
        </div>
    </div>
  );
}
