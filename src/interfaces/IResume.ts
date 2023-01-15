// Interface for items of resume-list.ts
export interface IResume extends IResumePath {
  language: string,
  img: string,
  imgAlt: string,
}

// Interface for a sub-item of resume-list.ts

export interface IResumePath {
  id: number,
  downloadPath: string,
  svg: string,
  svgAlt: string
}
