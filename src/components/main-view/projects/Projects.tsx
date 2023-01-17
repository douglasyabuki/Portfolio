// Components
import ProjectCards from "./project-cards/ProjectCards";
import GithubBoard from "./github-board/GithubBoard";

// Const
import { projectList } from "./project-cards/project-list/project-list";

// Projects main function
export default function Projects() {

  // Returns the whole Projects section to MainView.tsx
  return (
    <div
      id="#projects"
      className="h-auto w-auto bg-background-div2 px-4 py-20 sm:px-7 md:px-8 lg:px-10"
    >
      <ProjectCards list={projectList}></ProjectCards>
      <GithubBoard></GithubBoard>
    </div>
  );
}
