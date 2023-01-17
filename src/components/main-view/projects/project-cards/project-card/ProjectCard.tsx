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
    <div className="container relative m-auto h-[700px] w-[450px] flex-col items-center justify-between rounded-3xl bg-background-div1 text-center shadow-lg shadow-translucid-black py-12">
      <h2 className="text-2xl">{item.name}</h2>
      <h3 className="text-xl opacity-60 px-12">{item.description}</h3>
      <div className="shaped-ruppee relative h-auto w-auto translate-x-4 translate-y-4 shadow-2xl shadow-translucid-black">
        <img src={item.imageSrc} alt={item.imageAlt} className="cover" />
      </div>
    </div>
  );
}
