// Interfaces
import { IProject } from '../../../../interfaces/IProject';

// Components
import ProjectCard from './project-card/ProjectCard';
interface Props {
  list: IProject[];
}

export default function ProjectCards({ list }: Props) {
  return (
    <div className="block w-full justify-center py-8 text-center lg:flex lg:justify-between lg:px-10 lg:text-left xl:px-20">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Projects</h1>
      <h2 className="py-4 text-xl opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
        Take a quick look at some of his projects. Github and website available to each one of
        these.
      </h2>
      <div>
        {list.map((item) => (
          <ProjectCard key={item.id} item={item}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
