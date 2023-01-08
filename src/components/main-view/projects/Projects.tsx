import * as React from 'react';

export interface IProjectsProps {
}

export default function Projects (props: IProjectsProps) {
  return (
    <div id='projects' className="w-auto h-auto py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-background-div2">
      <div className="px-4 sm:px-7 md:px-8 lg:px-10 rounded-xl bg-red-700">
        Project works
      </div>
    </div>
  );
}
