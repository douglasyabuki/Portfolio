// Interfaces
import { IProject } from '../../../../interfaces/IProject';

// Components
import ProjectCard from './project-card/ProjectCard';
interface Props {
  list: IProject[];
}

export default function ProjectCards({ list }: Props) {
  return (
    <div className="w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <div className='block w-full justify-center py-8 text-center lg:flex lg:justify-between lg:text-left'>
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">Projects</h1>
        <h2 className="py-4 text-xl opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          Take a quick look at some of his projects. Github and website available to each one of
          these.
        </h2>
      </div>

      <div>
        {list.map((item) => (
          <ProjectCard key={item.id} item={item}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
