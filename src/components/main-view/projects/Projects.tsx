import * as React from 'react';

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <div
      id="#projects"
      className="h-auto w-auto bg-background-div2 py-16 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <div className="rounded-xl bg-red-700 px-4 sm:px-7 md:px-8 lg:px-10">Project works</div>
    </div>
  );
}
