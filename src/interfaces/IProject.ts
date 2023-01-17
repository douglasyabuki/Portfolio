// Interface of items on projectList.ts
export interface IProject {
  id: number,
  name: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  url: string,
  gitUrl: string,
  techs: string[],
}
