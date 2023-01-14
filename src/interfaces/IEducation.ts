// Interface of items in education-list.ts
export interface IEducation {
  id: number,
  university: string,
  degree: string,
  category: string,
  icon: string,
  href?: string,
  current: boolean,
}
