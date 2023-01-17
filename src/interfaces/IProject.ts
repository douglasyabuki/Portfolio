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

export const projectList: IProject[] = [
  {
    id: 0,
    name: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    url: '',
    gitUrl: '',
    techs: [''],
  },
]
