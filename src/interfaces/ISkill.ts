// Interface of items in skill-list.ts
export interface ISkill {
  id: number,
  skillName: string,
  skillIcon: string,
  skillImg?: string,
  skillImgAlt?: string,
  skillUrl: string,
  learning: boolean
}
